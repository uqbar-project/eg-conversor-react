
# Conversor ReactJS

[![Build Status](https://travis-ci.org/uqbar-project/eg-conversor-react.svg?branch=feature%2Fcypress)](https://travis-ci.org/uqbar-project/eg-conversor-react)

Si estás buscando la explicación original podés encontrarla en el branch master.

# Cypress :tada: :tada: :tada: 

## ¿Qué es? 

[Cypress](https://www.cypress.io) en un framework de test e2e, para testear aplicaciones que corren en un navegador.

### ¿Y pero esto no es lo mismo que los test unitarios con jest? :thinking: :thinking: :thinking: 

¡No! la diferencia que tenemos con los test unitarios, es que estos solo testean los componentes por separado, en cambio acá nosotros levantamos un navegador y podemos testear cómo interactúan nuestros componentes entre si, solo guiándonos por el HTML de nuestro sitio.

## Instalación :hammer_and_wrench: 

Tal cual nos explica en el [get-started](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install), instalamos la dependencia de cypress

```bash
npm install cypress --save-dev
```

Ahora le decimos a cypress que nos cree los archivos necesarios para comenzar a testear, tal como dice en la web podemos usar algunos de estos comandos

```bash
./node_modules/.bin/cypress open # o donde esté instalado el binario global de npm
```

O bien si tenemos npx (que se encuentra en la versión de npm `5.2` hacia delante)

```bash
npx cypress open
```

Si es la primera vez que corremos el proyecto, nos va a crear un montón de ejemplos de cómo testear, en caso contrario nos va abre el ambiente de desarrollo de cypress que tiene la siguiente pinta:

![video](video/open_cypress.gif)

En la primera pantalla nos muestra los archivos de tests que escribimos, los clickeamos y abre un navegador y empieza a correr nuestros tests. Pero ¡ojo! tenemos que tener nuestra aplicación levantada para poder correr los tests

¿Y como se hace eso ?

```bash
npm run start
```

Una vez levantado podemos correr el comando `open` de cypress, pero antes debemos modificar el archivo *cypress.json* para que la url base de los tests sea `localhost:3000` (puerto en el cual levantamos nuestra app).

```json
{
    "baseUrl": "http://localhost:3000",
    "video": false
}
```

ponemos `video` en `false` para que no grabe los tests 

### Cómo se escribe un test

Vamos a seguir usando los `describe` y `it` de jest y los hooks cómo  `before, beforeAll, beforeEach` , solo que ahora utilizaremos el objeto `cy` que nos va a permitir testear

```javascript
/// <reference types="Cypress" />

const MILLAS_SELECTOR = '[data-testid=millas]'
const KMS_SELECTOR = '[data-testid=kms]'
const ERROR_SELECTOR = '[data-testid=error]'

describe('Caso feliz', () => {
  before(() => {
    cy.visit('/')
  })
  it('escribimos un numero positivo de millas a convertir', () => {
    cy.get(MILLAS_SELECTOR)
      .type(10).should('have.value', '10')
  })
  it('y se tranforma a kilometros', () => {
    cy.get(KMS_SELECTOR).contains('16,093')
  })

})
describe('Caso 0', () => {
  before(() => {
    cy.visit('/')
  })
  it('escribimos 0 en las millas a convertir', () => {
    cy.get(MILLAS_SELECTOR)
      .type(0).should('have.value', '0')
  })
  it('y en los kilometros vemos 0', () => {
    cy.get(KMS_SELECTOR).contains('0')
  })

})
describe('Caso alfabetico', () => {
  before(() => {
    cy.visit('/')
  })
  it('escribimos un valor que no es un numero en el input', () => {
    cy.get(MILLAS_SELECTOR)
      .type('1.*-*/*').should('have.value', '1.*-*/*')
  })
  it('y aparece un cartel de error avisandonos que no es un input valido', () => {
    cy.get(ERROR_SELECTOR)
  })

})

```

Separamos los describes por *flujos* de nuestra aplicación y hacemos uso de `data-testid` para no acoplarnos a los atributos de html.

La línea `/// <reference types="Cypress" />` a comienzo de nuestro archivo de tests activa nuestro IDE para que utilice sugerencias sobre las funcionalidades de cypress.

La funciones que usamos de cypress son:

- `cy.visit` => para visitar una url de nuestra aplicación
- `cy.get` => obtenemos un elemento del DOM en base a un selector
- `cy.type` => escribimos en un input

## ¿Y travis ? :construction_worker_man: 

Bueno cypress en su [pagina](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI) nos comenta cómo integrar con nuestro CI de turno, estos test e2e.

Nosotros nos basamos en [este archivo](https://github.com/cypress-io/cypress-example-kitchensink/blob/master/.travis.yml) para crear el nuestro, borrando código redudante y demás yerbas.

Pero como hemos vimos antes,tenemos que tener la aplicación corriendo para poder testearla.... y ¿cómo hacemos eso en CI?

Fácil, creamos dentro de nuestro `package.json` los siguientes comandos:

```json
{
  "start": "react-scripts start",
  "start:ci": "npm start & wait-on http://localhost:3000",
  "cy:run": "cypress run",
  "cy:open": "cypress open",
  "cy:verify": "cypress verify",
}
```

Ya que dentro de travis utilizamos los siguientes comandos:

```yaml
language: node_js

node_js:
  - '14'

# if using Ubuntu 16 need this library
# https://github.com/cypress-io/cypress-documentation/pull/1647
addons:
  apt:
    packages:
    - libgconf-2-4

cache:
  # cache both npm modules and Cypress binary
  directories:
    - ~/.npm
    - ~/.cache
  override:
    - npm ci
    - npm run cy:verify

script:
  - npm run start:ci
  - npm run test
  - npm run cy:run
```

- `npm run start:ci` levanta nuestra aplicación y espera a que este completamente levantada para seguir al próximo paso (usamos una lib llamada wait-on para esperar)

para instalar `wait-on` : `npm install --save-dev wait-on`

- `npm run cy:run` corre nuestros tests

- `npm run cy:verify` chequea la instalación de travis en el ambiente

