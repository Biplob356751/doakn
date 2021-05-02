import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Data from './fakeData/fakeData.json';


const Details = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        for(let i=0;i<Data.length;i++){
            if(Data[i].id==id){
                setProduct(Data[i]);
            }
        }
    
    },[id])
    return (
        <div className="container-fluidd">
            <div className='detail'>
                <div className="col-6">
                    <div className="product_img">
                        <img src={product.image} alt={product.name}/>
                    </div>
                </div>
                <div className="col-6 product_name">
                    <h1>Product Name: <span>{product.name}</span></h1>
                    <h3>Product Price: <span>{product.price}</span></h3>
                    <p>{product.description}</p>
                    <button>Add To Cart</button>
                    <div className="multi_img">
                        <img src={product.image1} alt={product.name}/>
                        <img src={product.image2} alt={product.name}/>
                        <img src={product.image3} alt={product.name}/>
                        <img src={product.image4} alt={product.name}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Details;




