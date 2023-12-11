import React, {Fragment} from 'react'
import { Button, Container } from '@mui/material';
import axios from "axios"

const Home = () => {

  const hitpaypaymenthandler=async()=>{
    const amount=10;
    const currency="SGD";
    const name="Hitway Payment";
    const email="khurram-1234@gmail.com"

    const paymenturl=await axios.post(`http://localhost:5000/api/hitpay/new`,{amount,currency,name,email})
    const hitpayurl=paymenturl.data.url;
    window.location.href=hitpayurl
  }

  const stripepaymenthandler=async()=>{
    const amount=10;
    const currency="SGD";
    const name="Stripe Payment";
    const email="khurram-1234@gmail.com";
    const redirecturl="http://localhost:3000";
    const stripepayment=await axios.post(`http://localhost:5000/api/stripe/checkoutsession`,{amount,currency,email,name,redirecturl})
    const paymenturl=stripepayment.data.sessionurl;
    window.location.href=paymenturl;
  }
  return (
    <Fragment>
      <Container maxWidth="xl">
      <Button variant="contained" fullWidth onClick={hitpaypaymenthandler}>Pay with HitPay</Button>

      <Button variant="contained" fullWidth onClick={stripepaymenthandler}>Pay with Stripe</Button>


      
        
      </Container>
    </Fragment>
  )
}

export default Home