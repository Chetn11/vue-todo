import { createStore } from "vuex";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    data: [],
    token: null,
    userData: null,
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
      localStorage.setItem("Users", JSON.stringify(state.users));
    },
    createToken(state) {
      state.token = (Math.random() + 1).toString(36).substring(2);
      localStorage.setItem("token", state.token);
    },
    logout(state) {
      localStorage.removeItem("token");
      state.token = null;
      toast("User is successfully logged out", { autoClose: 10000 });
    },
    initializeStore(state) {
      const users = localStorage.getItem("Users");
      if (users) {
        state.users = JSON.parse(users);
      }
      const token = localStorage.getItem("token");
      if (token) {
        state.token = token;
      } else {
        state.token = null;
      }
    },
    set_Data(state, data) {
      state.data =data;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        // const data = await res.json();
        console.log(res);
        commit("set_Data", Object.freeze(res.data));
      } catch (error) {}
    },

    signup({ commit, state }, { name, email, password }) {
      return new Promise((resolve, reject) => {
        const newUser = {
          email: email,
          name: name,
          password: password,
        };

        const userExists = state.users.some((user) => user.email === email);
        if (!userExists) {
          commit("addUser", newUser);
          resolve({ success: true, message: "Signup Completed!" });
        } else {
          resolve({ success: false, message: "User already exists" });
        }
      });
    },
    login({ commit, state }, { email, password }) {
      return new Promise((resolve, reject) => {
        const userExists = state.users.find((user) => user.email === email);
        if (userExists) {
          if (userExists.password === password) {
            commit("createToken");
            state.userData = userExists.name;
            resolve({ success: true, message: "Login Completed" });
          } else {
            resolve({ success: false, message: "Incorrect password" });
          }
        } else {
          resolve({
            success: false,
            message: "User does not exist! Go to signup",
          });
        }
      });
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    userData(state) {
      return state.userData;
    },
    data(state) {
      // console.log(state.data)
      return state.data;
    },
  },
});
