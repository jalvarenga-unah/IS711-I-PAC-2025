import { Producto } from './components/Producto.jsx'


// componente App -> Una etiqueta especial de HTML
export const App = () => {

  const producto3 = {
    price: 900,
    description: "Descripción del prodcuto 3",
    image: "https://unavatar.io/github/jalvarenga-unah"
  }

  return (
    <>
      <h1>Mi primer componente</h1>

      <Producto {...producto3}>
        <h2>Producto 3</h2>
      </Producto>

      <Producto
        price={300}
        description="Descripción del prodcuto 1"
        image="https://unavatar.io/github/jalvarenga-unah" >

        <h2>Producto 1</h2>

      </Producto>

      <Producto

        price={600}
        description="Descripción del prodcuto 1"
        image="https://unavatar.io/github/jalvarenga-unah">


        <h2>Producto 2</h2>


      </Producto>


    </>
  )

}