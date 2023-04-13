package utils

import (
	"github.com/spf13/viper"
)

/*
utils.ReadConfigWithViper lee todas las variables de configuración guardadas
en un archivo main-backend-config.yaml que debe recibir el programa como
argumento.

Se usa Viper, una librería popular para leer y escribir archivos de
configuración.
*/
func ReadConfigWithViper(filename string) error {
	viper.SetConfigName(filename) // Define el nombre del archivo de configuracion sin fijarle una extensión (json, yaml, etc).
	viper.AddConfigPath(".")      // ruta == ".", Le añade a Viper la ruta de la carpeta donde se está trabajando (working directory) para buscar el config file.
	err := viper.ReadInConfig()   // Busca y lee el archivo de configuración.
	if err != nil {               // Retorna un error si el archivo no puede ser leído.
		return err
	}

	// Si llegaste acá, ¡no hay errores!
	return nil
}
