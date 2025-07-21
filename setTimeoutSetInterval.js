// set timeout

setTimeout((name,sn)=>{
    console.log('Hello after 2 seconds', name, sn);
},2000,'sunil','kumar');


let toClearTimeout = setTimeout(()=>{
    console.log('This will not run');
}, 2000);

clearTimeout(toClearTimeout);

//set interval

let intevalId = setInterval(()=>{
    const now = new Date();
    console.log('Current time:', now.toLocaleTimeString());
}, 1000);

let count = 0;
let clearIntervalId = setInterval(()=>{
    if(count == 5) {
         clearInterval(clearIntervalId);
    }  
    count++;
    console.log('Interval running:', count);

}, 5000);


//set interval 

let showTime = ()=>{
    const now = new Date();
    console.log('Current time:', now.toLocaleTimeString());
}
setInterval(showTime, 1000);

