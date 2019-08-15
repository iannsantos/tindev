import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
  // comando usado para redirecionar a porta do android para poder usar o localhost
  // adb reverse tcp:3333 tcp:3333
});

export default api;