import { nanoid } from "nanoid";
import { PRISMA_CLIENT } from "../index.js";

export const getUniqueAlias = async (): Promise<string> => {

    for (let i = 0; i < 5; i++) { // its rare to collide, just not to make it infinte, have added 5
        const id = nanoid(8); 
        const found = await PRISMA_CLIENT.urls.findUnique({
            where: {
                alias: id
            }
        });
        if (!found) return id;
    }
    throw new Error("Failed to generate unique alias after multiple attempts");
};
