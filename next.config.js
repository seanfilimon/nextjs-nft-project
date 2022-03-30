module.exports = {
    env: {
        MONGO_URI: "mongodb+srv://root:7dApqdgaxDT7T3CG@fabwelt.ebeic.mongodb.net/nftmarket",
        API_URL: "https://localhost:3000",
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs
        }

        return config;
    }
}