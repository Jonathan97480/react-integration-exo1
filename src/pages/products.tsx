import { useState, useEffect } from 'react';
import { Card } from '../components';
import { useParams } from 'react-router-dom';
import { apiProduct } from "../interface";
import { ApiGetAllProductsByCategory } from '../api/apiRequest';

export default function Products() {

    const [products, setProducts] = useState<apiProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {

        ApiGetAllProductsByCategory(parseInt(id === undefined ? "1" : id)).then((data: apiProduct[]) => {
            setProducts(data);

            setLoading(false);
        })



    }, []);
    console.log(products);
    return (
        <div className='products'>

            <div>
                <h1>Produits</h1>
            </div>

            <section>
                {
                    loading === true ? <p>Chargement...</p> : products.map((product: apiProduct) => {
                        return (
                            <Card
                                key={product.id}
                                id={product.id}
                                name={product.attributes.name}
                                pic={product.attributes.pic.data[0].attributes.url}
                                desc={product.attributes.desc}
                            />
                        )
                    }
                    )
                }

            </section>

        </div>
    );



}