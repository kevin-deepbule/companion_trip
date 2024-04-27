import { createPinia } from 'pinia'
import search from "./modules/search"
const pinia = createPinia()

export * from "@/store/modules/city.js"
export default pinia