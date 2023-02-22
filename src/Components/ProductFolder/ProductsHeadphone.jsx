import React, { useState, useEffect} from "react";
import "./Products.css";
import ContainerItem from "../ContainerItem";
import data from "../../data";
import axios from "axios";
function ProductsHeadphone() {
    const [list, setlist] = useState(data);  
    
    return (
        <div className="container__products-products">
            {list.map((item,index)=> item.loai=="headphone"
                &&<ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)}    
        </div>    
    );
}

export default ProductsHeadphone;
