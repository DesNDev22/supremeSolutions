// Netlify Function to retrieve the API key
exports.handler = async (event, context) => {
    // Securely fetch and return the API key
    const apiKey = Netlify.env.get("GOOGLE_MAPS_API_KEY");
    return {
        statusCode: 200,
        body: JSON.stringify({ apiKey })
    };
};