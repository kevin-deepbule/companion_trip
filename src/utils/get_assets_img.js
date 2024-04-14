 const getAssetUrl = (image)=>{
  let url =  new URL(`../assets`+image,import.meta.url).href
  return url
}
export default getAssetUrl