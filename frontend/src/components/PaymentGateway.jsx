import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

export default function PaymentGateway()  {
    const PUBLIC_KEY = "pk_test_51PZzlJC9YGzw7PbLgpKUzBxgdRtwpQO8MYkcmgHGFHzpMdSXOtwPqcbMJ7WA37VS1WfAte42PEhcWGwbeWgNhqWU00jXSHYZO4";
    const stripeTestPromise = loadStripe(PUBLIC_KEY);
    
    return (
        <Elements stripe={stripeTestPromise}>
       
        </Elements>
      
    );
    }

