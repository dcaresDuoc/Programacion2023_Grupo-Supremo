package api

import (
	"auth-jwt-golang/types"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func GetProducts(c *gin.Context, db *gorm.DB) {
	var users []types.User
	db.Table("users").Select("id, name").Scan(&users)

	c.JSON(200, gin.H{
		"users": users,
	})
}
