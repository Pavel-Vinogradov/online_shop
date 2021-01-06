import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        setProducts: (state, products) => (state.products = products),
        setCart: (state, products) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.article === products.article) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(products)
                }
            } else {
                state.cart.push(products)
            }
        },

        removeToCart: (state, index) => (state.cart.splice(index, 1)),
        increment: (state, index) => {
            state.cart[index].quantity++
        },
        decrement: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }
    },
    actions: {
        async fetchCategories({commit}) {
            axios.get('http://localhost:3000/products').then(response => {
                commit('setProducts', response.data)
            })
        },
        add_to_cart({commit}, products) {
            commit('setCart', products)
        },
        delFromCart({commit}, index) {
            commit('removeToCart', index)
        },
        incrementCart({commit}, index) {
            commit('increment', index)
        },
        decrementCart({commit}, index) {
            commit('decrement', index)
        },
    },
    getters: {
        PRODUCTS: (state) => {
            return state.products;
        },
        CART: (state) => {
            return state.cart
        }
    },

})

export default store;

