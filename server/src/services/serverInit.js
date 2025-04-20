import { dbConnection } from "./dbConnection.js";

export const serverInit = async (app, PORT) => {
    try {
        await dbConnection(); // Initialize the database connection

        app.listen(PORT, () => {
            console.log(`✅ Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('🔴 Error starting the server:', error);
        process.exit(1); // Exit the process with failure
    }
}