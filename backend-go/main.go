package backendgo

import (
    "log"
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors" // Penting agar Next.js bisa akses
    "github.com/raihanazzaidan/backend-go/routes"
)

func main() {
    app := fiber.New()

    // Setup CORS (Agar frontend Next.js di port 3000 bisa ambil data dari sini)
    app.Use(cors.New())

    // Panggil setup routes yang kita buat tadi
    routes.SetupRoutes(app)

    // Jalankan server di port 8080
    log.Fatal(app.Listen(":1234"))
}