import { getShoppingCart } from "../Utilities/FackeDB";

  
 const CustomCartLoader = async () => { 
     const loadproducts = await fetch('/data2.json'); 
     const product = await loadproducts.json(); 
  
  
     // local storage e jinish gula ache skhean theke ene kon kon cart gula add kora hoice ta dekhate pari 
  
  
     // getshopping cart will give you the total localstorage object and we gonna match that id with whole data id 
     const storedCart = getShoppingCart() ; 
     const savedCart = []; 
                                                        
     for (const id in storedCart) { 
                                                      
         const addedproduct = product.find(prod => prod.id == id); 
         if (addedproduct) { 
                                                    
             // const quantity = storedCart[id] 
             // addedproduct.quantity = quantity;   
             savedCart.push(addedproduct); 
  
         } 
     } 
  
     return savedCart; 
  
 } 
  
  
  
 // akhn amr localstorage e thaka pura object tai quantity soho peye gelam shetai amra akhn order e dekhaabo 
 // return korte hobe 
  
 export default CustomCartLoader;