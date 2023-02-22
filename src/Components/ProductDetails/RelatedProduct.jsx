import { Form, Link, useParams } from "react-router-dom";
import ContainerItem from "../ContainerItem";
import "./ProductDetails.css" ;
import React from "react";
import {Off_Noti} from '../../actions';
import { connect } from "react-redux";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../../data";
const axios = require("axios");

const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export function ProductDetails({noti,Off_Noti}) {
  const [product, setProduct] = data;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    Off_Noti()
  };
  
  const { productID } = useParams();

 
  var vnd = Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  let settings = {
    arrows:true,
    infinite: true,
    speed:1000,
    slidesToShow:4,
    slidesToScroll:1,
  };
  return (
    <div>
        <Snackbar open={noti} autoHideDuration={1500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Thêm vào giỏ hàng thành công!
            </Alert>
        </Snackbar>
        <h3 class="section-title">Sản phẩm liên quan</h3>
        <div className="related-products">
            <Slider {...settings}>
                {data.map((item)=>productID!=item.maSp&&data[productID-1].loai===item.loai&&
                <ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)}
            </Slider>
        </div>
    </div>
  );
}
const mapStateToProps = state =>{
  return{
      noti:state._todoProduct.noti
  }
}
export default connect(mapStateToProps, {Off_Noti})(ProductDetails)
