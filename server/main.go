package main

import (
	"net/http"

	"github.com/jcv10/easy-collage/routes"
	"github.com/rs/cors"
)

func main() {
	appRouter := http.NewServeMux()
	appRouter.Handle("/api/images/", http.StripPrefix("/api/images", routes.Routes()))

	handler := cors.Default().Handler(appRouter)
	http.ListenAndServe(":8080", handler)
}
