package routes

import (
    "github.com/gofiber/fiber/v2"
    "github.com/raihanazzaidan/backend-go/controllers"
)

func SetupRoutes(app *fiber.App) {
    // Grouping agar URL lebih rapi (misal: /api/projects)
    api := app.Group("/api")

    // Route untuk mengambil data projects
    api.Get("/projects", controllers.GetAllProjects)
	
}