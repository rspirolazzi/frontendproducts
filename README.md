# FrontEnd de Productos - Examen Técnico

ABM FrontEnd de productos

## Getting Started

Estas instrucciones son para poder realizar el deploy y testing de la App

### Prerequisites

NodeJS v6 o superior
Api Customer ejecutandose en el puerto 4000. Para cambiar esta configuracion ir a **src/services/products.js** y editar

```
export default new ProducService('http://localhost:4000')
```


### Installing

Clonar el repositorio

```
git clone https://github.com/rspirolazzi/frontendproducts.git
```

Una vez clonado realizar el install con npm

```
npm install
```

Por ultimo

### `npm start`

Ejecuta la aplicacion en modo development y se ejecutara en [http://localhost:3000](http://localhost:3000)

### Project structure

Este proyecto se realizo utilizando [Create React apps](https://github.com/facebookincubator/create-react-app)

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── src
│   └── actions
│   └── components
│       └── Layout
│       └── NewProduct
│       └── Products
│   └── configureStore
│   └── containers
│       └── Alert
│       └── Delete
│       └── Edit
│       └── Fetching
│       └── Form
│       └── Home
│       └── New
│   └── lib
│   └── reducers
│   └── services
│   └── utils

```

## Built With

* [axios](https://www.npmjs.com/package/axios)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [redux](https://github.com/reactjs/redux)
* [react-validation](https://www.npmjs.com/package/react-validation)
* [Create React apps](https://github.com/facebookincubator/create-react-app)

## Authors

* **Rodrigo Spirolazzi** - [Github](https://github.com/rspirolazzi/)
