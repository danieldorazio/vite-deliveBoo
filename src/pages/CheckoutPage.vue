<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            token: "",
            instance: null,
            paymentNonce: null,
            amount: 10
        }
    },
    created() {
        axios
            .get(`${this.store.baseUrl}/api/braintree/token`)
            .then((resp) => {
                this.token = resp.data.clientToken
                console.log(this.token);
            })
            .finally(this.createForm)
    },
    methods: {
        createForm() {
            const button = document.querySelector('#submit-button');

            braintree.dropin.create({
                authorization: this.token,
                container: '#dropin-container'
            }, function (createErr, instance) {
                button.addEventListener('click', function () {
                    instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {

                        this.paymentNonce = payload.nonce;

                        console.log("Paymentnonce", this.paymentNonce);
                        axios
                        .post("http://127.0.0.1:8000/api/order", {
                            total: 10,
                            payment_method_nonce: payload.nonce
                        })
                        .then((resp) => console.log(resp))
                    });
                    console.log("Pagamento avvenuto");
                });
            });
        }
    }
}
</script>

<template>
    <div id="dropin-wrapper">
        <div id="checkout-message"></div>
        <div id="dropin-container"></div>
        <button id="submit-button">Submit payment</button>
    </div>
</template>


<style lang="scss" scoped>
.ms_checkout-section {
    min-height: 480px;
    padding: 3rem;
}
</style>