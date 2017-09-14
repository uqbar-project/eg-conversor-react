
# Conversor ReactJS

<img src="https://cloud.githubusercontent.com/assets/4549002/17750101/fa2f7334-6496-11e6-864f-6f57e8d7bc67.png" height="150" width="150"/>

Este proyecto fue generado con el script [Create React App](https://github.com/facebookincubator/create-react-app), y tiene

## Esquema

- una vista con un estado que contiene los kilómetros convertidos
- un modelo que es un Conversor con un método convertir() que devuelve el valor de las millas convertido a kilómetros

## Vista 

La vista (componente principal) tiene

- un input type text cuyo evento onChange dispara la conversión
- al convertir se actualiza el state del componente generando un nuevo conversor y llamando al convertir. El valor resultante va a parar a la única variable kilometros.


