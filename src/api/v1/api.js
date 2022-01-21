import axios from 'axios';
// import Qs from 'qs';

const LIVE_BASE_URL = '';
// const LIVE_BASE_URL = null;
// DOCKER
// # access from LAN device with 192.168.0.12:3001 (ipconfig IPv4 Addres on windows)
// # 192.168.0.51 (ifconfig | grep inet) on mac
const docker_on_mac_base_url = 'http://192.168.0.51:3001';

// TRIGGERS NETWORK ERROR
// const docker_on_mac_base_url = 'http://192.168.0.51:3001';
// TRIGGERS TIMEOUT
// const docker_on_mac_base_url = 'http://192.168.0.51:3002';

const IS_DEV = true;

let base_url;
if (IS_DEV) {
  base_url = docker_on_mac_base_url;
} else {
  base_url = LIVE_BASE_URL;
}

const api = axios.create({
  baseURL: LIVE_BASE_URL,
});

// 1000 = 10 seconds
api.defaults.timeout = 1000;

export default api;
