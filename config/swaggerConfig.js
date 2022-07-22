

export const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de videos con NODE, MONGO, EXPRESS",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:8800"
            }
        ]
    },
    apis: [ "../routes/*.js" ]
}
