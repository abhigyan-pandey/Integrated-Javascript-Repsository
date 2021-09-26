// let response = fetch("https:www.netflix.com") ;
// console.log(response.then(res=>res.json()).then(d => {
//     console.log(d)
// })) ;
function eventListen()
{
    document.getElementById('btn').addEventListener("click",function abc()
    {
        console.log('Moved Buddy')
    }) ;
}
eventListen() ;

function f1() 
{
    let error = true ;
    return new Promise(function(resolve ,reject)
    {
        setTimeout(function()
        {
            if(error)
            {
                resolve("Api Worked") ;
            }
            else
            {
                reject("Sorry the api did'nt work") ;    
            }
        }, 3000);   
    })
};

f1().then(function name(message) 
{
    console.log("200 status , Message :" +message)    
}).catch(function name(message) 
{
    console.log("API did'nt work , Reason : "+message) ;    
}) ;