package utils

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/spf13/viper" //Para manejo de Config Files.
)

func ConfigDatabase() (*gorm.DB, error) {
	stringConnection := fmt.Sprintf(
		"%s:%s@%s(%s)/%s?charset=utf8&parseTime=True&loc=Local",
		viper.GetString("SQLUser"),
		viper.GetString("SQLPasswd"),
		viper.GetString("SQLNet"),
		viper.GetString("SQLAddr"),
		viper.GetString("SQLDBName"),
	)
	db, err := gorm.Open("mysql", stringConnection)
	return db, err
}
