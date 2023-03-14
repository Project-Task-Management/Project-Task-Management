import axios from "axios";
const apiURL = "http://localhost:7897/product/";
export const getProducts = async () => {
  return axios.get(apiURL).then(res=> console.log(res.data))
};

export const getOneProduct = async (id) => {
  return axios.get(apiURL+"/"+id);
};
export const createProduct = async (product) => {
  return axios.post(apiURL, product);
};
 
export const deleteProduct=async(id)=>{
    return axios.delete(apiURL+"/"+id)
}