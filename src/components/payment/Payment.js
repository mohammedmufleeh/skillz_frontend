import Axios from "axios";
import React, { useContext, useState } from "react";

import Head from "../home/Head";
import BaseUrl from "../../BaseUrl";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Payment() {
    
    const navigate = useNavigate()
    const {user} =useContext(AuthContext)
    const state  = useLocation();
    const student_id = user.user_id
    const [courseID, setCourse] = useState(state.state?.course_id);
    const [amount, setAmount] = useState(state.state?.amount);
    const [name, setName] = useState(state.state?.name);

// this function will handel payment when user submit his/her money
// and it will confim if payment is successfull or not
  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await Axios({
        url: `${BaseUrl}payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          setCourse("");
          setAmount("");
          navigate('/payment/success',{ state: { course_id: courseID} })
          
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make //transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();

    let bodyData = new FormData();

    // we will pass the amount and product name to the backend using form data
    bodyData.append("amount", amount);
    bodyData.append("course_id", courseID);
    bodyData.append("student_id", student_id);
    


    const data = await Axios({
      url: `${BaseUrl}razorpay/pay/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      return res;
    });

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    var options = {
      key_id: process.env.REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
      key_secret: process.env.REACT_APP_SECRET_KEY,
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Org. Name",
      description: "Test teansaction",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  console.log(state);
  console.log(student_id);
  return (
    // <div style={{minHeight:'90vh'}}>
    //     <Head/>
   
    // <div className="container" >
    //   <div className="row">
    //     <div className="col-8">

    //     </div>
    //     <div className="col-4 bg-light mt-5">
    //     <form style={{textAlign:'left',width:'300px',marginTop:'8rem'}}>
    //     <h5 style={{fontSize:'30px'}}>Summary</h5>

    //     <div className="form-group" style={{display:'flex',justifyContent:'space-between'}}>
    //       <label htmlFor="name">Product name</label>
    //       {/* <input
    //         type="text"
    //         className="form-control"
    //         id="name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       /> */}
    //       <p>{name}</p>
    //     </div>
    //     <div style={{display:'flex',justifyContent:'space-between'}} className="form-group">
    //       <label htmlFor="exampleInputPassword1">Amount</label>
    //       {/* <input
    //         type="text"
    //         className="form-control"
    //         id="amount"
    //         value={amount}
    //         onChange={(e) => setAmount(e.target.value)}
    //       /> */}
    //       <p>{amount}</p>
    //     </div>
    //   <button  onClick={showRazorpay} className="btn btn-primary " style={{width:'100%',backgroundColor:'#a435f0',border:'#a435f0'}}>
    //     Pay with razorpay
    //   </button>
    //   </form>

    //     </div>
    //   </div>
      
    //   </div>
    // </div>
    <div style={{minHeight:'100vh'}}>
      <Head/>
    <div className="container" style={{ marginTop: "20vh" }}>
      <form>
        <h1>Summary</h1>

        <div className="form-group mt-2">
          {/* <label htmlFor="name">Product name</label> */}
          
          {/* <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          {/* <p>{name}</p> */}
          <span>Product Name:</span><span>{name}</span>
        </div>
        <div className="form-group mt-2" >
        <span>Product price:</span><span>{amount}</span>

          {/* <label htmlFor="exampleInputPassword1">Amount</label> */}
          {/* <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          /> */}
          {/* <p>{amount}</p> */}
        </div>
      </form>
      <button onClick={showRazorpay} className="btn btn-primary btn-block mt-2"  style={{width:'25%',backgroundColor:'#a435f0',border:'#a435f0'}}>
        Pay with razorpay
      </button>
    </div>
    </div>
  );
}

export default Payment;