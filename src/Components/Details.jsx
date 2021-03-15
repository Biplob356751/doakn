import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './fakeData/fakeData.json';


const Details = () => {
    const {id} = useParams();
    const product = Data.find(pd => pd.key === id);
    console.log(product);
    return (
        <div className='detail'>
            <h1>this is details page{id}</h1>
        </div>
    );
};
export default Details;