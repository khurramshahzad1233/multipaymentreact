import React,{Fragment,useEffect,useState} from 'react';
import {useLocation} from "react-router-dom"
import axios from 'axios';
import {db} from "../config/firebase";
import {collection,addDoc} from "firebase/firestore";
import { Button } from '@mui/material';


const Success = () => {
  const location=useLocation();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [amount,setAmount]=useState("");
  const [currency,setCurrency]=useState("");
  
  console.log(name)
  console.log(email)
  console.log(amount)
  console.log(currency)
  
  
  useEffect(()=>{
    const checkpaymentstatushandler=async()=>{
      const searchParams=new URLSearchParams(location.search);
      const ref=searchParams.get("reference");
      if(!ref) return;
      
      const paymentstatus=await axios.post(`http://localhost:5000/api/hitpay/status`,{ref})
      const amount=paymentstatus.data.amount;
      const currency=paymentstatus.data.currency;
      const name=paymentstatus.data.name;
      const email=paymentstatus.data.email;
      setName(name)
      setEmail(email)
      setAmount(amount)
      setCurrency(currency)
    }
    checkpaymentstatushandler();

    const stripepaymentstatus=async()=>{
      const stripesearchParams=new URLSearchParams(location.search);
      const stripesessionid=stripesearchParams.get("session_id");
      if(!stripesessionid) return;
      console.log(stripesessionid)
  
      const stripepaymentstatus=await axios.post(`http://localhost:5000/api/stripe/status`,{stripesessionid});
      const dataamount=stripepaymentstatus.data.amount;
      const datacurrency=stripepaymentstatus.data.currency;
      const dataname=stripepaymentstatus.data.name;
      const dataemail=stripepaymentstatus.data.email;
      setAmount(dataamount)
      setCurrency(datacurrency)
      setName(dataname)
      setEmail(dataemail)
    }
  
    stripepaymentstatus();

    

    
  },[location.search]);


  const savedatahandler=async()=>{
    try {
      const document=await addDoc(collection(db,"payments"),{
        useremail:email,
        paymentmode:name,
        totalamount:amount,
        currency:currency
      });
      console.log(document);
      alert("payment done successfully")
      
    } catch (error) {
      const errormessage=error.message;
      const errorcode=error.code;
      alert(errormessage,errorcode)
      
    }
  };

  
  
  return (
    <Fragment>
      <Button variant="contained" fullWidth onClick={savedatahandler}>click to finish the payment</Button>
    </Fragment>
  )
}

export default Success