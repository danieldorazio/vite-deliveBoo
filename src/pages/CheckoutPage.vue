<script>
import axios from 'axios';
import { store } from '../store';
import AppFooter from '../components/partials/AppFooter.vue';
import AppHeader from '../components/partials/AppHeader.vue';

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
    computed: {
        isNameValid() {
            return this.user_data.client_name.trim() !== '';
        },
        isEmailValid() {
            // Utilizza una regolare espressione per la validazione dell'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.user_data.client_email);
        },
        isAddressValid() {
            return this.user_data.delivery_address.trim() !== '';
        },
        isPhoneNumberValid() {
            const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(this.user_data.client_phone);
        },
        isDateValid() {
            return this.user_data.date.trim() !== '';
        },
        isDeliveryTimeValid() {
            return this.user_data.delivery_time.trim() !== '';
        },
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
        submitForm() {
            // Effettua il submit solo se entrambi i campi sono validi
            if (this.isNameValid && this.isEmailValid && this.isAddressValid && this.isPhoneNumberValid && this.isDateValid && this.isDeliveryTimeValid) {
                // Gestisci l'invio del form qui
                console.log('Form inviato con successo');
                this.flag = true


            } else {
                console.log('Il form contiene errori');
            }
        },

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
                this.$router.push('/thanks')
                this.flag = false;
                localStorage.setItem('cart', '[]');
                this.store.cart = [];
            }, 5000);
        }
    },
    components: { AppFooter, AppHeader }
}
</script>

<template>
    <div class="my_main">
        <AppHeader />

        <div class="my-background d-flex align-content-center">
            <div class="my-container container text-warning mt-4">
                <div class="d-flex justify-content-center align-items-center gap-5 p-3 text-white">
                    <img src="../assets/img/bg-title.png" alt="">
                    <h2>CHECKOUT</h2>
                </div>

                <div class="mt-5 row gap-5 ">
                    <div class="col-7">
                        <form :class="this.flag ? 'd-none' : ''" class="my-form row justify-content-center" novalidate>
                            <div class="mb-3 col-9 col-sm-12 col-lg-6">
                                <label for="client_name" class="form-label me-2">NAME</label>
                                <span v-if="!isNameValid" class="error">*</span>
                                <input type="text" class="form-control  " id="client_name"
                                    v-model="this.user_data.client_name" placeholder="NAME"
                                    :class="{ 'is-invalid': !isNameValid }" required>

                            </div>

                            <div class="mb-3 col-9 col-sm-12 col-lg-6">
                                <label for="delivery_address" class="form-label me-2">ADDRESS</label>
                                <span v-if="!isAddressValid" class="error">*</span>
                                <input type="text" class="form-control" id="delivery_address"
                                    v-model="this.user_data.delivery_address" placeholder="ADDRESS"
                                    :class="{ 'is-invalid': !isAddressValid }">

                            </div>

                            <div class="mb-3 col-9 col-sm-12">
                                <label for="client_email" class="form-label me-2">EMAIL</label>
                                <span v-if="!isEmailValid" class="error">*</span>
                                <input type="email" class="form-control  " id="client_email"
                                    aria-describedby="emailHelp" v-model="this.user_data.client_email"
                                    placeholder="EMAIL" :class="{ 'is-invalid': !isEmailValid }">

                            </div>

                            <div class="mb-3 col-9 col-sm-4">
                                <label for="client_phone" class="form-label me-2">PHONE</label>
                                <span v-if="!isPhoneNumberValid" class="error">*</span>
                                <input type="text" class="form-control  " id="client_phone"
                                    v-model="this.user_data.client_phone" placeholder="PHONE"
                                    :class="{ 'is-invalid': !isPhoneNumberValid }">
                                <span v-if="!isPhoneNumberValid" class="error my-phone">Il numero di telefono deve
                                    essere composto da
                                    10 cifre numeriche</span>
                            </div>
                            <div class="mb-3 col-9 col-sm-4">
                                <label for="date" class="form-label me-2">DATE</label>
                                <span v-if="!isDateValid" class="error">*</span>
                                <input type="date" id="date" class="form-control text-white pe-5" name="date"
                                    data-format="yyyy/mm/dd" v-model="this.user_data.date"
                                    :class="{ 'is-invalid': !isDateValid }">
                            </div>
                            <div class="mb-3 col-9 col-sm-4">
                                <label for="delivery_time" class="form-label me-2">DELIVERY TIME</label>
                                <span v-if="!isDeliveryTimeValid" class="error">*</span>
                                <input type="datetime-local" id="delivery_time" class="form-control text-white pe-5"
                                    name="delivery_time" data-format="dd/mm/yyyy HH:mm:ss"
                                    v-model="this.user_data.delivery_time"
                                    :class="{ 'is-invalid': !isDeliveryTimeValid }">
                            </div>
                            <button type="submit" class="btn btn-warning col-4"
                                @click.prevent="submitForm">Submit</button>
                        </form>
                    </div>
                    <div class="col-3 my_bg-dark p-0">
                        <h2 class="text-center pt-3 pb-3 ">TOTAL PRICE {{ user_data.totalPrice }} &euro; </h2>
                        <ul class="d-flex flex-column text-white my_scroll">
                            <li class="d-flex justify-content-between mb-3 pe-3" v-for="piatto in this.store.cart"
                                :key="piatto">
                                <div>
                                    {{ piatto.quantity }} x {{ piatto.name }}
                                </div>

                                <div>
                                    {{ piatto.price * piatto.quantity }} &euro;
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-3" v-for="piatto in this.store.cart"
                                :key="piatto">
                                <div>
                                    {{ piatto.quantity }} x {{ piatto.name }}
                                </div>

                                <div>
                                    {{ piatto.price * piatto.quantity }} &euro;
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-3" v-for="piatto in this.store.cart"
                                :key="piatto">
                                <div>
                                    {{ piatto.quantity }} x {{ piatto.name }}
                                </div>

                                <div>
                                    {{ piatto.price * piatto.quantity }} &euro;
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-3" v-for="piatto in this.store.cart"
                                :key="piatto">
                                <div>
                                    {{ piatto.quantity }} x {{ piatto.name }}
                                </div>

                                <div>
                                    {{ piatto.price * piatto.quantity }} &euro;
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-3" v-for="piatto in this.store.cart"
                                :key="piatto">
                                <div>
                                    {{ piatto.quantity }} x {{ piatto.name }}
                                </div>

                                <div>
                                    {{ piatto.price * piatto.quantity }} &euro;
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-3" v-for="piatto in this.store.cart"
                                :key="piatto">
                                <div>
                                    {{ piatto.quantity }} x {{ piatto.name }}
                                </div>

                                <div>
                                    {{ piatto.price * piatto.quantity }} &euro;
                                </div>
                            </li>
                        </ul>
                    </div>
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

.my_bg-dark {
    background-color: #000000;

    ul {
        list-style-type: none;
        padding-left: 0;
    }
}

.my_scroll {
    overflow: auto;
    max-height: 50vh;
}

.my_scroll::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
}

.my_scroll::-webkit-scrollbar-track {
    border-radius: 10px;
    border: 1px solid #cacaca;
    background-color: #f1f1f1;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
}

.my_scroll::-webkit-scrollbar-thumb {
    background-image: -webkit-gradient(linear,
            left bottom,
            left top,
            color-stop(0.5, #faa343),
            color-stop(1, #f8e16c));
    border-radius: 10px;
}

.is-invalid {
    border-color: red;
}

.my-phone {
    font-size: .75rem;
}

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
    padding: 90px;

    .my-container {
        height: $height-main;
    }
}

.my-form {
    input {
        background-color: rgb(84, 84, 84);
        border: #000000;
        padding: 15px;
        color: #ffffff;
    }
}



.form-control::placeholder {
    color: #ffffff;
    opacity: 1;
}


.ms_checkout-section {
    min-height: 480px;
    padding: 3rem;
}
</style>