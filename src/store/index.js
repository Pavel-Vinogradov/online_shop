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
        setCart: (state, products) => (state.cart.push(products))
    },
    actions: {
        async fetchCategories({commit}) {
            axios.get('http://localhost:3000/products').then(response => {
                commit('setProducts', response.data)
            })
        },
        async add_to_cart({commit}, products) {
            commit('setCart', products)
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

