// Closures
function a()
{
    var x =100 ;
    function b()
    {
        console.log(x) ;
    }
    x = 200 ; 
    return b ;
}

var z = a() ;

z() ;

function eventListener()
{
    let cnt = 0;
    document.getElementById('btn').addEventListener('click',function()
    {
        console.log('Click Happened' ,cnt++) ;
    })
}
eventListener() ;