import { Producto } from './components/Producto.jsx'
import './styles/app.css'
// componente App -> Una etiqueta especial de HTML
export const App = () => {

  const producto3 = {
    title: "Producto 3",
    price: 900,
    description: "Descripción del prodcuto 3",
    image: "https://unavatar.io/github/jalvarenga-unah"
  }

  return (
    <>
      <h2>Mi primer componente</h2>

      <section className='container'>

        <Producto {...producto3} />

        <Producto
          title="Producto 1"
          price={300}
          description="Descripción del prodcuto 1"
          image="https://unavatar.io/github/jalvarenga-unah" />


        <Producto
          title="Producto 2"
          price={600}
          description="Descripción del prodcuto 1"
          image="https://unavatar.io/github/jalvarenga-unah" />
      </section>



    </>
  )

}