import z from "zod";

export const CreateURLScheema = z.object({
    target_url: z.string(),
    custom_alias: z.string().optional(),
    topic: z.string().default("GLOBAL")
});