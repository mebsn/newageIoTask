import axios from "axios";

const instance = axios.create({
  baseURL: "https://paridirect-ussd.dev.smrtsrc.io",

});

export default instance;
