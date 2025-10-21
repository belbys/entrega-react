import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) throw new Error("Producto no encontrado");
                return res.json();
            })
            .then((data) => {
                const normalized = (s) => (s || "").toLowerCase().trim();
                const filtered = categoryId
                    ? data.filter((p) => normalized(p.category) === normalized(categoryId)) : data;
                setProducts(filtered);
            })

            .catch(console.error);
    }, [categoryId])

    return (<section className="container">
        <h1>Bienvenidos</h1>
        <ItemList list={products} />
    </section>);
}