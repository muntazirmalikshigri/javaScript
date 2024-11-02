const promiseOne = new Promise(function(resolve , reject){
    // Do an sync task
    //DB calls , cryptography , network
    setTimeout(function(){
    console.log('async task complete');
    resolve();
    
    },1000)
    })
    
    promiseOne.then(function(){
        console.log('promise consumed')
    })
    
    new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log('async complete task 2');
            resolve();
        })
        
    }).then(function(){
        console.log('async resolved');
    
    })
    
    const promiseThree = new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve({user:'malik',email:'munna@gmail.com'});
        })
    })
    promiseThree.then(function(user){
        console.log(user)
    })
    
    const promiseFour = new Promise(function(resolve , reject){
        setTimeout(function(){
            let error = true;
            if(!true){
                resolve({username:'Muntazir',user:'malik@gmail.com'})
            }else{
                reject('rejected')
            }
        })
    })
    const userName=promiseFour.then(function(user){
    return user.username
    }).then((username)=>{
        console.log(username)
    }).catch(function(error){
        console.log(error)
    }).finally(()=>{
    console.log("The promise either resolved or rejected")
    })
    const promiseFive = new Promise(function(resolve , reject){
        setTimeout(function(){
            let error = true;
            if(!true){
                resolve({username:'Munna',user:'malik@gmail.com'})
            }else{
                reject('rejected two')
            }
        },1000)
    })
    
    async function consumePromiseFive(){
       try {
        const response = await promiseFive
        console.log(response)
       } catch (error){
    
       }
    }
    consumePromiseFive()
    
    async function getAllUsers(){
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log('E:',error)
      }
    }
    
    getAllUsers();
    
    fetch('https://jsonplaceholder.typicode.com/users').then((reponse)=>{
       return reponse.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>console.log(error))
    