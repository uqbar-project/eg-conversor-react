
# Conversor ReactJS

![video](video/demo.gif)

Este proyecto fue generado con el script [Create React App](https://github.com/facebookincubator/create-react-app), y tiene

## Esquema

- una vista con un estado que contiene los kilómetros convertidos
- un modelo que es un Conversor con un método convertir() que devuelve el valor de las millas convertido a kilómetros

## Vista 

La vista (componente principal) tiene

- un input type text cuyo evento onChange dispara la conversión
- al convertir se actualiza el state del componente generando un nuevo conversor y llamando al convertir. El valor resultante va a parar a la única variable kilometros.


