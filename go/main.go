package main

import (
	"auth-jwt-golang/api"
	"auth-jwt-golang/utils"
	"fmt"
	"log"

	"github.com/spf13/viper"
)

func main() {
	err := utils.ReadConfigWithViper("config")
	if err != nil {
		log.Fatal(err)
	}

	db, err := utils.ConfigDatabase()
	if err != nil {
		log.Fatal(err)
	}

	router := api.SetupGinRouter(db)
	port := fmt.Sprintf(":%s", viper.GetString("port"))
	if err = router.Run(port); err != nil {
		log.Fatal(err)
	}
}
