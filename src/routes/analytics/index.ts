import express, { Router } from "express";
import type { Request, Response } from "express";
import { PRISMA_CLIENT } from "../../index.js";

const router: express.Router = Router();

router.get("/alias/:alias", async (req: Request, res: Response) => {
  try {
    const alias = req.params.alias?.trim();
    if (!alias) return res.status(400).json({ message: "Alias not provided!" });

    const url = await PRISMA_CLIENT.urls.findUnique({
      where: { alias, user_id: req.user_id! }
    });
    if (!url) return res.status(404).json({ message: "URL not found!" });

    const clicks = await PRISMA_CLIENT.clicks.findMany({
      where: { url_id: url.id }
    });

    const total_clicks = clicks.length;
    const unique_users = [...new Set(clicks.map(c => c.ip))];
    const unique_countries = [...new Set(clicks.map(c => c.country))];

    const clicks_by_device = clicks.reduce((acc, c) => {
      acc[c.device || "unknown"] = (acc[c.device || "unknown"] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const clicks_by_os = clicks.reduce((acc, c) => {
      acc[c.os || "unknown"] = (acc[c.os || "unknown"] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    
    const trends_last_7_days: Record<string, number> = {};
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const dayStr = day.toISOString().split("T")[0];
      trends_last_7_days[dayStr!] = 0;
    }
    clicks.forEach(c => {
      const dayStr = new Date(c.timestamp).toISOString().split("T")[0];
      if (trends_last_7_days && trends_last_7_days.hasOwnProperty(dayStr!)) {
        trends_last_7_days[dayStr!]!++;
      }
    });

    res.status(200).json({
      url_data: {
        total_clicks,
        unique_users,
        unique_countries,
        clicks_by_device,
        clicks_by_os,
        trends_last_7_days,
        rawData: clicks.map(c => ({
          ip: c.ip,
          timestamp: new Date(c.timestamp).getTime(),
          country: c.country,
          device: c.device,
          os: c.os
        }))
      }
    });

  } catch (err) {
    console.error("Error fetching alias analytics:", err);
    res.status(500).json({ message: "Error fetching alias analytics. Please try again later." });
  }
});

router.get("/topic/:topic", async (req: Request, res: Response) => {
  try {
    const topic = req.params.topic?.trim();
    if (!topic) return res.status(400).json({ message: "Topic not provided!" });

    const urls = await PRISMA_CLIENT.urls.findMany({
      where: { topic, user_id: req.user_id! }
    });
    if (!urls || urls.length === 0) return res.status(404).json({ message: "No URLs found for this topic!" });

    const clicks = await PRISMA_CLIENT.clicks.findMany({
      where: { url_id: { in: urls.map(u => u.id) } }
    });

    const urlGroups: Record<string, any> = {};

    urls.forEach(url => {
      const urlClicks = clicks.filter(c => c.url_id === url.id);

      const clicks_by_device = urlClicks.reduce((acc, c) => {
        acc[c.device || "unknown"] = (acc[c.device || "unknown"] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const clicks_by_os = urlClicks.reduce((acc, c) => {
        acc[c.os || "unknown"] = (acc[c.os || "unknown"] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      urlGroups[url.alias] = {
        total_clicks: urlClicks.length,
        unique_users: [...new Set(urlClicks.map(c => c.ip))],
        unique_countries: [...new Set(urlClicks.map(c => c.country))],
        clicks_by_device,
        clicks_by_os,
        rawData: urlClicks.map(c => ({
          ip: c.ip,
          timestamp: new Date(c.timestamp).getTime(),
          country: c.country,
          device: c.device,
          os: c.os
        }))
      };
    });

    const total_clicks = clicks.length;
    const unique_users = [...new Set(clicks.map(c => c.ip))];
    const unique_countries = [...new Set(clicks.map(c => c.country))];

    res.status(200).json({
      topic_data: {
        total_clicks,
        unique_users,
        unique_countries,
        urls: urlGroups
      }
    });

  } catch (err) {
    console.error("Error fetching topic analytics:", err);
    res.status(500).json({ message: "Error fetching topic analytics. Please try again later." });
  }
});


router.get("/overall", async (req: Request, res: Response) => {
  try {
    const totalUrls = await PRISMA_CLIENT.urls.count();
    const totalClicks = await PRISMA_CLIENT.clicks.count();

    const uniqueUserIPsRaw = await PRISMA_CLIENT.clicks.findMany({
      distinct: ["ip"],
      select: { ip: true }
    });
    const totalUniqueUsers = uniqueUserIPsRaw.length;

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 30);

    const clicksOverTimeRaw = await PRISMA_CLIENT.clicks.groupBy({
      by: ["timestamp"],
      _count: { id: true },
      where: { timestamp: { gte: startDate } }
    });
    
    const clicksOverTime: Record<string, number> = {};
    clicksOverTimeRaw.forEach(c => {
      const day = c.timestamp.toISOString().split("T")[0];
      clicksOverTime[day!] = (clicksOverTime[day!] || 0) + c._count.id;
    });

    res.status(200).json({
      total_urls: totalUrls,
      total_clicks: totalClicks,
      total_unique_users: totalUniqueUsers,
      usage_trends_last_30_days: clicksOverTime
    });

  } catch (err) {
    console.error("Error fetching overall analytics:", err);
    res.status(500).json({
      message: "Error fetching overall analytics. Please try again later."
    });
  }
});

export default router;
