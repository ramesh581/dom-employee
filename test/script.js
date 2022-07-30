

 
let count = 0;
for(let i=1;i<=10;i++){
setTimeout(counter,1000*i);
}

function counter(){
    count++;
    console.log(count);
    let target = document.getElementById('test');
    target.innerText=count;
    
    
    if(count==10){
        console.log("HAPPY INDEPENDENCE DAY");
        let target = document.getElementById('test');
        target.innerText = "";
        let greetings = document.getElementById('greeting');
        greetings.innerText = "HAPPY INDEPENDENCE DAY";
        target.style.color
    }

}
