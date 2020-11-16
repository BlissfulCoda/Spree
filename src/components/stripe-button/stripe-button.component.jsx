import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price* 100;
    const publishablekey = 'pk_test_51Hnvx8Cl9Ml1QycoPVMvB2CIOpeQJjrs8wbmZka05kJ3AYL1lCpFeiY4eTPtZxKx9ABg0mP7b39AhCawkjJnQszm00eKm0JoP9';

    const onToken = token => {
        alert('Payment Successful ')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='SPREE Clothing Ltd.'
        billingAndress
        shippingAddress
        description={`Your Total is £${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;