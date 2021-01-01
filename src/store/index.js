import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        setProducts: (state, products) => (state.products = products),
    },
    actions: {
        async fetchCategories({commit}) {
            axios.get('http://localhost:3000/products').then(response => {
                commit('setProducts', response.data)
            })

        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
    },

})

export default store;

