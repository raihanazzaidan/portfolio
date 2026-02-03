package controllers

import (
    "github.com/gofiber/fiber/v2"
    "github.com/raihanazzaidan/backend-go/models"
)

// GetAllProjects mengirimkan daftar project (Hardcode data sebagai ganti DB)
func GetAllProjects(c *fiber.Ctx) error {
    // Ceritanya ini data dari Database
    projects := []models.Project{
        {
            ID:          1,
            Title:       "Sistem Antrian Klinik",
            Description: "Aplikasi backend menggunakan C++ dan Queue",
            TechStack:   []string{"C++", "Algorithm", "CLI"},
            GithubURL:   "https://github.com/username/klinik",
        },
        {
            ID:          2,
            Title:       "Evolv Prototype",
            Description: "Desain UI/UX untuk aplikasi karir",
            TechStack:   []string{"Figma", "Prototyping"},
            ImageURL:    "/images/evolv.png",
        },
    }

    // Return response JSON
    return c.Status(200).JSON(fiber.Map{
        "status":  "success",
        "message": "Data projects found",
        "data":    projects,
    })
}