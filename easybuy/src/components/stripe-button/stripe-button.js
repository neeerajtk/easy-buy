import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price;
    const publushableKey = 'pk_test_51HEpmvFFRLfWNL6k0IVCSYqp9uhe08RciGndjo3bYiWVUwZWPXOW8XLzYdwbkYQwN7YVFMOuQzigY9FoUYSKAMNE00Eftkb2Zz';

    const onToken = token => {
        console.log(token);
        alert('Thanks, Order has been placed successfully ! ');
        
    }

    return(
        <StripeCheckout
            currency="INR"
            label='Pay Now'
            name='Rangeela Ind'
            billingAddress
            shippingAddress
            // image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publushableKey}
        />
    );
};
export default StripeCheckoutButton; 