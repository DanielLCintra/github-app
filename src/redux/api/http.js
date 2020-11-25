import axios from "axios";

var username = "cintra.70@gmail.com";
var password = "sp21vc642013";
var credentials = btoa(username + ":" + password);
var basicAuth = "Basic " + credentials;

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: +basicAuth },
});

export default http;
