try {
    process.loadEnvFile()
} catch {
    console.log("erro ao carregar .env")
}

export const PORT = Number(process.env.PORT ?? 3333)
const uri = process.env.MONGODB_URI ?? ' ';

if(!uri) {
    console.log("Defina mongodb uri")
}

export const MONGODB_URI = uri;