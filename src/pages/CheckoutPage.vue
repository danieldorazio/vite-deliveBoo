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
            flag: false,
            user_data: {
                totalPrice: localStorage.getItem('totalPrice'),
                cart: localStorage.getItem('cart'),
                payment: 'Credit Card',
                date: '',
                client_email: '',
                client_name: '',
                delivery_address: '',
                delivery_time: '',
                client_phone: ''
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
                                cart: user_data.cart,
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
        },
        waitPag(){
            setTimeout(() => {
                this.flag = false;
            }, 5000);
        }
    }
}
</script>

<template>
    <form :class="this.flag ? 'd-none' : '' " >
        <div class="mb-3 w-50">
            <label for="client_name" class="form-label">Name</label>
            <input type="text" class="form-control" id="client_name" v-model="this.user_data.client_name">
        </div>
        <div class="mb-3 w-50">
            <label for="client_email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="client_email" aria-describedby="emailHelp" v-model="this.user_data.client_email" >
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3 w-50">
            <label for="delivery_address" class="form-label">Address</label>
            <input type="text" class="form-control" id="delivery_address" v-model="this.user_data.delivery_address" >
        </div>
        <div class="mb-3 w-50">
            <label for="client_phone" class="form-label">Phone number</label>
            <input type="text" class="form-control" id="client_phone" v-model="this.user_data.client_phone" >
        </div>
        <div class="mb-3 w-25">
            <label for="date" class="form-label">Date</label>
            <input type="date"  id="date" class="form-control" name="date" data-format="yyyy/mm/dd" v-model="this.user_data.date" >
        </div>
        <div class="mb-3 w-25">
            <label for="delivery_time" class="form-label">Delivery Time</label>
            <input type="datetime-local"  id="delivery_time" class="form-control" name="delivery_time" data-format="dd/mm/yyyy HH:mm:ss" v-model="this.user_data.delivery_time">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="this.flag = true">Submit</button>
    </form>

    <div :class="this.flag ? '' : 'd-none'">
        <div id="dropin-wrapper">
            <div id="checkout-message"></div>
            <div id="dropin-container"></div>
            <button id="submit-button" @click.prevent="waitPag()" class="btn btn-info">Submit payment</button>
        </div>
    </div>
    <!-- <router-link  :to="{ name: 'home'}" @click="waitPag()"></router-link> -->
</template>


<style lang="scss" scoped>
.ms_checkout-section {
    min-height: 480px;
    padding: 3rem;
}
</style>