class ApiService{
   URL = "https://contact-list-b089e-default-rtdb.firebaseio.com/list.json";

   async GetContactList(){
      const List = await fetch(this.URL)
      .then(responce => {
         return responce.json();
      })
      .then(data => {
         if(data == null){
            return []
         } else{
            return data
         }

      })
      .catch(err => console.log(err));
      return List;
   }

   async UpdateDatabase(List){
      const result = await fetch(this.URL, {
         headers:{
            "Content-Type": "aplication/json"
         },
         method: "PUT",
         body: JSON.stringify(List)
      });
      return result;
   }
}
const API = new ApiService();
export default API;