import z from "zod";

export const CreateURLScheema = z.object({
    target_url: z.string(),
    custom_alias: z.string().optional().nullable(),
    topic: z.string().default("GLOBAL")
}).superRefine((data, ctx) => {
    if (data.custom_alias && data.custom_alias.length < 5) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "custom_alias must be at least 5 characters long",
            path: ["custom_alias"],
        });
    }
})