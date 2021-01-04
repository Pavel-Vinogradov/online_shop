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
        setCart: (state, products) => (state.cart.push(products)),
        removeToCart:(state, index) =>(state.cart.splice(index,1))
    },
    actions: {
        async fetchCategories({commit}) {
            axios.get('http://localhost:3000/products').then(response => {
                commit('setProducts', response.data)
            })
        },
        async add_to_cart({commit}, products) {
            commit('setCart', products)
        },
        async delFromCart({commit}, index) {
            commit('removeToCart', index)
        }
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

