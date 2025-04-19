
export const serverInit = async (app, PORT) => {
    try {
        app.listen(PORT, () => {
            console.log(`✅ Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('🔴 Error starting the server:', error);
        process.exit(1); // Exit the process with failure
    }
}