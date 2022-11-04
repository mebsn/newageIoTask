import axios from "axios";

const instance = axios.create({ // TODO: Cool.
  baseURL: "https://paridirect-ussd.dev.smrtsrc.io",

});

export default instance;
