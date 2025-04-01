

//recibiendo props
export const Producto = ({ children, image, description, price }) => {

    //? Las props deben ser Inmutables
    // const newPrice = `HNL ${price}`
    return (
        <>
            <article>
                <header>
                    <img src={image} alt="" />
                    {children}
                </header>
                <div>
                    <p>{description}</p>
                    <p>HNL {price}</p>
                </div>
            </article>
        </>
    )
}