package types

import (
	"time"

	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Id             string    `json:"id" gorm:"column:id"`
	Active         bool      `json:"active" gorm:"column:active"`
	Name           string    `json:"name" gorm:"column:name"`
	Email          string    `json:"email" gorm:"column:email"`
	Password       string    `json:"password" gorm:"column:password"`
	ProfilePicture string    `json:"profilePicture" gorm:"column:profilePicture"`
	CreatedAt      time.Time `json:"createdAt" gorm:"column:createdAt"`
	UpdatedAt      time.Time `json:"updatedAt" gorm:"column:updatedAt"`
}
