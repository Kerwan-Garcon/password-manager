import * as z from "zod";

export const formSchema = z.object({
  password: z.string().min(8),
  name: z.string().min(1),
});
