class RequestUser{
    constructor(url){
        url = 'https://jsonplaceholder.typicode.com'
    }
    async UserInformation(){
        
        let responce = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        let data = responce.json();
        console.log(data);
        return data
        // .catch((error) => {
        //     console.error(error);
        // })
    }

}
(async () =>{
    let requestUser = new RequestUser;
    let user = await requestUser.UserInformation()
    

    // .catch((error) => {
    //     console.error(error);
    // })
    
});

const requestUser = new RequestUser;
requestUser.UserInformation()
