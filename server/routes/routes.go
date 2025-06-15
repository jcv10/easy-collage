package routes

import (
	"net/http"

	"github.com/jcv10/easy-collage/controllers"
)

func Routes() *http.ServeMux {
	router := http.NewServeMux()

	router.HandleFunc("GET /{id}", controllers.GetCollage)
	router.HandleFunc("POST /upload", controllers.UploadImages)
	return router
}
