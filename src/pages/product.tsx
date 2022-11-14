import React, { useEffect, useState } from "react";
import { ApiGetProductById } from "../api/apiRequest";
import { useParams } from "react-router-dom";
import { apiProduct } from "../interface";
import Api from "../api/conf";



export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState<apiProduct>({} as apiProduct);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiGetProductById(parseInt(id === undefined ? "1" : id)).then((data) => {
            setProduct(data);
            setLoading(false);
        })
    }, []);


    return (

        <>
            {loading === true ? <p>Chargement...</p> :
                < div className="product" >

                    <div>
                        <h1>{product.attributes.name}</h1>
                    </div>

                    <div>
                        <img src={Api.url + product.attributes.pic.data[0].attributes.url} alt="" />
                        <p>{product.attributes.desc}</p>
                    </div>

                    <div className="product__info" >

                        <h2>Caractéritiques</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit pellentesque in tristique commodo mattis in. Pellentesque odio ultricies dictumst sed adipiscing viverra integer augue elementum. Ut amet, feugiat feugiat sit. Nunc porttitor adipiscing viverra porttitor nascetur aliquam.</p>

                        {
                            product.attributes.Guarantee !== null ?
                                <span>Garantie :{product.attributes.Guarantee}</span> : null}
                        {
                            product.attributes.energy_class !== null ?
                                <span>Classe énergétique : {product.attributes.energy_class}</span> : null}

                        {
                            product.attributes.Availablity !== null ?
                                <span>Disponible : {product.attributes.Availablity ? 'En stock' : 'Rupture'}  </span> : null}

                        {
                            product.attributes.Feed !== null ?
                                <span>Alimentation :230 V Monophasé</span> : null}

                        <span>Dimension : {product.attributes.dimension.width + ' x ' + product.attributes.dimension.height + ' mm'}</span>

                        {
                            product.attributes.ability !== null ?
                                <span>Capacité :{product.attributes.ability}</span> : null}

                        {
                            product.attributes.Nominal_power !== null ?
                                <span>Puissance nominale : {product.attributes.Nominal_power}w</span> : null}

                        {
                            product.attributes.Repairability_Index !== null ?
                                <span>Index de réparabilité : {product.attributes.Repairability_Index}</span> : null}

                        {
                            product.attributes.weight !== null ?
                                < span > Poids : 75kg</span> : null}

                    </div>


                </div>
            }
        </>
    )


}