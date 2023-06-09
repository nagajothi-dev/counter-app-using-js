console.log('hello')
var a=10
console.log(a)
var dec=document.querySelector('.decrement');
var inc=document.querySelector('.increment');
var num=document.querySelector('.number');

inc.addEventListener('click',function(event){
    num.textContent= +num.textContent+1

})
dec.addEventListener('click',function(event){
    num.textContent= +num.textContent-1
})



