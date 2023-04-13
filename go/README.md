## Go init project

go mod init auth-jwt-golang
touch main.go

## Database

go get -u gorm.io/gorm
go get -u gorm.io/driver/{mysql,sqlite,postgres}

## Framework Gin Gonic

go get -u github.com/gin-gonic/gin

## Bcrypt using crypto package

go get -u golang.org/x/crypto/bcrypt

## JWT

go get -u github.com/golang-jwt/jwt/v5

## gotenv

go get github.com/joho/godotenv

## Compile Daemon

go get/install github.com/githubnemo/CompileDaemon
