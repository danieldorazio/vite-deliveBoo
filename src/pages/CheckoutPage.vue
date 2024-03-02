<script>
import axios from 'axios';
import { store } from '../store';
import AppFooter from '../components/partials/AppFooter.vue';

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
        };
    },
    created() {
        axios
            .get(`${this.store.baseUrl}/api/braintree/token`)
            .then((resp) => {
                this.token = resp.data.clientToken;
                console.log(this.token);
            })
            .finally(this.createForm);
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
                            .then((resp) => console.log(resp));
                    });
                    console.log("Pagamento avvenuto");
                });
            });
        },
        waitPag() {
            setTimeout(() => {
                this.flag = false;
            }, 5000);
        }
    },
    components: { AppFooter }
}
</script>

<template>
    <div class="my_main">
        <div class="my-background d-flex align-content-center">
            <div class="my-container container text-warning mt-4">

                <div class="d-flex justify-content-center align-items-center gap-5 p-3 text-white">
                    <img src="../assets/img/bg-title.png" alt="">
                    <h2>CHECKOUT</h2>
                </div>


                <div class="mt-5">
                    <form :class="this.flag ? 'd-none' : ''" class="my-form row justify-content-center ">
                        <div class="mb-3 col-9 col-sm-12 col-lg-6">
                            <label for="client_name" class="form-label">NAME</label>
                            <input type="text" class="form-control  " id="client_name" v-model="this.user_data.client_name"
                                placeholder="NAME">
                        </div>

                        <div class="mb-3 col-9 col-sm-12 col-lg-6">
                            <label for="delivery_address" class="form-label">ADDRESS</label>
                            <input type="text" class="form-control    text-secondary text-secondary" id="delivery_address"
                                v-model="this.user_data.delivery_address" placeholder="ADDRESS">
                        </div>

                        <div class="mb-3 col-9 col-sm-12">
                            <label for="client_email" class="form-label">EMAIL</label>
                            <input type="email" class="form-control  " id="client_email" aria-describedby="emailHelp"
                                v-model="this.user_data.client_email" placeholder="EMAIL">
                            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                        </div>

                        <div class="mb-3 col-9 col-sm-4">
                            <label for="client_phone" class="form-label">PHONE</label>
                            <input type="text" class="form-control  " id="client_phone"
                                v-model="this.user_data.client_phone" placeholder="PHONE">
                        </div>
                        <div class="mb-3 col-9 col-sm-4">
                            <label for="date" class="form-label">DATE</label>
                            <input type="date" id="date" class="form-control   text-secondary" name="date"
                                data-format="yyyy/mm/dd" v-model="this.user_data.date">
                        </div>
                        <div class="mb-3 col-9 col-sm-4">
                            <label for="delivery_time" class="form-label">DELIVERY TIME</label>
                            <input type="datetime-local" id="delivery_time" class="form-control text-secondary"
                                name="delivery_time" data-format="dd/mm/yyyy HH:mm:ss"
                                v-model="this.user_data.delivery_time">
                        </div>
                        <button type="submit" class="btn btn-warning col-6"
                            @click.prevent="this.flag = true">Submit</button>
                    </form>
                </div>
                <div :class="this.flag ? '' : 'd-none'">
                    <div id="dropin-wrapper">
                        <div id="checkout-message"></div>
                        <div id="dropin-container"></div>
                        <button id="submit-button" @click.prevent="waitPag()" class="btn btn-warning w-25">Submit
                            payment</button>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <AppFooter />
        </div>
    </div>
    <!-- <router-link  :to="{ name: 'home'}" @click="waitPag()"></router-link> -->
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.my_main {
    height: $height-main;
    overflow-y: scroll;
    background-color: #ddd1cb;
}

.my_main::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
}

.my_main::-webkit-scrollbar-track {
    border-radius: 10px;
    border: 1px solid #cacaca;
    background-color: #f1f1f1;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
}

.my_main::-webkit-scrollbar-thumb {
    background-image: -webkit-gradient(linear,
            left bottom,
            left top,
            color-stop(0.5, #faa343),
            color-stop(1, #f8e16c));
    border-radius: 10px;
}

.my-background {
    background-image: url(../assets/img/bg-pattern.jpg);

    .my-container {
        height: $height-main;
    }
}

.my-form {
    input {
        background-color: #000000;
        border: #000000;
        padding: 15px;
    }
}



.form-control::placeholder {
    color: #6c757d;
    opacity: 1;
}


.ms_checkout-section {
    min-height: 480px;
    padding: 3rem;
}
</style>