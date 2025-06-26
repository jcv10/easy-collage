package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type ResponseData struct {
	Message string `json:"message"`
	Status  int    `json:"status`
}

type Data struct {
	Color     string `json:"color"`
	Direction string `json:"direction"`
	Border    int32  `json:"border"`
}

func UploadImages(w http.ResponseWriter, r *http.Request) {

	var d Data

	r.ParseMultipartForm(80)

	body := r.FormValue("data")

	err := json.Unmarshal([]byte(body), &d)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(d.Color)
	fmt.Println(d.Direction)
	fmt.Println(d.Border)

	files := r.FormValue("images")

	if len(files) == 0 {
		http.Error(w, "No image files found", http.StatusBadRequest)
		return
	}

	fmt.Println(files)

	res := ResponseData{
		Message: "upload route hit",
		Status:  200,
	}

	data, err := json.Marshal(res)

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Write(data)
}

func GetCollage(w http.ResponseWriter, r *http.Request) {
	res := ResponseData{
		Message: "get collage route hit",
		Status:  200,
	}

	data, err := json.Marshal(res)

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Write(data)
}
