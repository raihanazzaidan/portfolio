package models

type Project struct {
    ID          int      `json:"id"`
    Title       string   `json:"title"`
    Description string   `json:"description"`
    TechStack   []string `json:"tech_stack"`
    ImageURL    string   `json:"image_url"`
    GithubURL   string   `json:"github_url"`
}