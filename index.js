


let compile=document.getElementById("compile");
let textarea1=document.getElementById("textarea1");
compile.addEventListener("click",function(){
    const xhr=new XMLHttpRequest();
    let code=textarea1.value;
    
    let langid=lang.value;
    

    xhr.open('POST','https://codequotient.com/api/executeCode',true);
    xhr.addEventListener("load",function(event)
    {
        // if(event.status==200)
        // {
            console.log(event.responseText);
        // }
        // else
        // console.log("some error occured");

    })
    xhr.getResponseHeader('Content-Type','application/json');

    xhr.send(`{ "code" : "${code}" , langId : "${langid}"`);


})