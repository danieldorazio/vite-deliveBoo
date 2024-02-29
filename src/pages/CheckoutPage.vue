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
            amount: 10,
            user_data: {
                totalPrice: localStorage.getItem('totalPrice'),
                payment: 'card',
                date: '24-02-25',
                client_email: 'franco@gmail.com',
                client_name: 'franco',
                delivery_address: 'via di franco',
                delivery_time: '2024-02-17 20:30:00',
                client_phone: '1234567890'
            },
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
            var user_data = this.user_data;
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

                                total: user_data.totalPrice,
                                payment: user_data.payment,
                                date: user_data.date,
                                client_email: user_data.client_email,
                                client_name: user_data.client_name,
                                delivery_address: user_data.delivery_address,
                                delivery_time: user_data.delivery_time,
                                client_phone: user_data.client_phone,
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
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>


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