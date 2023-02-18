import axios from "axios";
const REACT_URL = "https://jsonplaceholder.typicode.com";
const APP_ROUTES = {
    INDEX: "/",
    COMMENT: "/comments",
    ALBUMS: "/albums",
    PHOTOS: "/photos",
    POSTS: "/posts",
};
const Maxios = axios.create({
    baseURL: REACT_URL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});
const Loginaxios = axios.create({
    baseURL: "https://ecomerce-server.onrender.com",
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});
export const getAllCart = async () => {
    return await Maxios.get(APP_ROUTES.COMMENT);
};
export const postCart = async (state) => {
    return await Maxios.post(APP_ROUTES.POSTS, { state });
};
export const postLogin = async (state) => {
    return await Loginaxios.post("/auth/login", state);
};
