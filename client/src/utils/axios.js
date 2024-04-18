import axios from "axios";

export const localRequest = axios.create({
    baseURL: 'http://localhost:3000' // dev
    // baseURL: 'https://gc01.andaridea.my.id' // prod
})