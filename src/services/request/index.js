import axios from "axios"
import { BASE_URL,TIMEOUT } from "./config.js"
class myRequest {
  constructor(baseUrl,timeout=10000) {
    this.instance = axios.create({
      baseUrl,
      timeout
    })
  }
  request(config){
    return new Promise((resolve,rejcet)=>{
      this.instance.request(config).then(res=>{
        resolve(res.data)
      }).catch(err=>{
      rejcet(err)
    })
    })
  }
  get (config){
    return this.request({...config,method: "get"})
  }

  post(config) {
    return this.request({...config,method:"post"})
  }

}

export default new myRequest(BASE_URL,TIMEOUT)