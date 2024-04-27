import { getCityAll } from "@/services"
import { defineStore } from "pinia"

export const useCityStore = defineStore("city",{
  state: ()=>({
    allCities: []
  }),
  actions: {
    async fetchAllCitiesData(){
        const res = await getCityAll()
        this.allCities = res.data
    }
  }
})

