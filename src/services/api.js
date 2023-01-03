import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-nhzp.onrender.com"
});
