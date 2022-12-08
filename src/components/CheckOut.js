// import axios from 'axios';
// import { useState } from 'react'
// import BaseUrl from '../BaseUrl';
// import Head from './Head'
// import './payment.css'

// function CheckOut() {
//   const [name,setName] =useState("")
//   const [amount,setAmount]= useState("");

//   // this function will handel payment when user submit his/her money
// // and it will confim if payment is successfull or not
// const handlePaymentSuccess = async (response) => {
//   try {
//     let bodyData = new FormData();

//      // we will send the response we've got from razorpay to the backend to validate the payment
//      bodyData.append("response", JSON.stringify(response));

     
//      await axios({
//       url: BaseUrl+'/razorpay/payment/success/',
//       method: "POST",
//       data: bodyData,
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         console.log("Everything is OK!");
//         setName("");
//         setAmount("");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (error) {
//     console.log(console.error());
//   }
// };

// const loadScript = () => {
//   const script = document.createElement("script");
//   script.src = "https://checkout.razorpay.com/v1/checkout.js";
//   document.body.appendChild(script);
// };

// const showRazorpay = async () => {
//   const res = await loadScript();

//   let bodyData = new FormData();

//   // we will pass the amount and product name to the backend using form data
//   bodyData.append("amount", amount.toString());
//   bodyData.append("name", name);

//   const data = await axios.post('razorpay/pay/',
//   bodyData,
//     ).then((res) => {
//       console.log(res)
//     return res;
//   })
//   // in data we will receive an object from the backend with the information about the payment
//     //that has been made by the user

//     var options = {
//       key_id: process.env.REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
//       key_secret: process.env.REACT_APP_SECRET_KEY,
//       amount: data.data.payment.amount,
//       currency: "INR",
//       name: "Org. Name",
//       description: "Test teansaction",
//       image: "", // add image url
//       order_id: data.data.payment.id,
//       handler: function (response) {
//         // we will handle success by calling handlePaymentSuccess method and
//         // will pass the response that we've got from razorpay
//         handlePaymentSuccess(response);
//       },
//       prefill: {
//         name: "User's name",
//         email: "User's email",
//         contact: "User's phone",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     var rzp1 = new window.Razorpay(options);
//     rzp1.open();

//   }
//   return (
//     <div>
//       <Head/>
//     <div class="container">
//         <div class="row">
            
            
            
//             <div class="col-12 mt-4">
//                 <div class="card p-3">
//                     <p class="mb-0 fw-bold h4">Payment Methods</p>
//                 </div>
//             </div>
//             <div class="col-12">
//                 <div class="card p-3">
//                     <div class="card-body border p-0">
//                         <p>
//                             Razorpay
//                         </p>
                        
//                     </div>
//                     <div class="card-body border p-0">
                        
//                         <div class="collapse show p-3 pt-0" id="collapseExample">
//                             <div class="row">
//                                 <div class="col-lg-5 mb-lg-0 mb-3">
//                                     <p class="h4 mb-0">Summary</p>
//                                     <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green">: Name of
//                                             product</span>
//                                     </p>
//                                     <p class="mb-0">
//                                         <span class="fw-bold">Price:</span>
//                                         <span class="c-green">:$452.90</span>
//                                     </p>
//                                     <p class="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
//                                         nihil neque
//                                         quisquam aut
//                                         repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab
//                                         quis,
//                                         iste harum ipsum hic, nemo qui!</p>
//                                 </div>
//                                 <div class="col-lg-7">
                                    
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-12">
//                 <div class="btn btn-primary payment">
//                     Make Payment
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
  


//   )
// }

// export default CheckOut
