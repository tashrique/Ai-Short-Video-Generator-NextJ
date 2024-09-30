/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-db_owner:4VsiITR0WFKA@ep-lingering-hall-a54tcvgs.us-east-2.aws.neon.tech/ai-short-vide-generator?sslmode=require',
    }
};