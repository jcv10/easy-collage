package controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type ResponseData struct {
	Message string `json:"message"`
	Status  int    `json:"status`
}

type Data struct {
	Color     string `json:"color"`
	Direction string `json:"direction"`
}

func UploadImages(w http.ResponseWriter, r *http.Request) {

	body, err := io.ReadAll(r.Body)

	defer r.Body.Close()

	if err != nil {
		fmt.Println(err)
	}

	var d Data

	err = json.Unmarshal(body, &d)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(d.Color)
	fmt.Println(d.Direction)

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
