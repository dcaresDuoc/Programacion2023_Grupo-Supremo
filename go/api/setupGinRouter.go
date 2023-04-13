package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/spf13/viper"
)

func SetupGinRouter(db *gorm.DB) *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	router := gin.New() // Declara una instancia de gin, iniciandolo con 2 middleware (Logger y ).Recovery
	// router.SetTrustedProxies(nil)

	// Servir página local
	// Es necesaria esta expresión rara para que la raíz (/) no tenga
	// conflicto con los otros endpoints (/semaphore/data, etc)
	// Link de interés: https://stackoverflow.com/questions/36357791/gin-router-path-segment-conflicts-with-existing-wildcard
	router.NoRoute(gin.WrapH(http.FileServer(http.Dir(viper.GetString("HTMLDir")))))

	api := router.Group("/api")

	api.GET("/data", func(c *gin.Context) {
		GetProducts(c, db)
	})

	return router
}
