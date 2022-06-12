let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let r = Math.floor(Math.random()*256);
    let g =Math.floor(Math.random()*256);
    let b =Math.floor(Math.random()*256);
    let a = Math.random();

    // alert(r+" "+g+" "+b);
    let color = 'rgba('+r+","+g+","+b+","+a+')';
//     alert(color);
    document.body.style.backgroundColor = 'rgba('+r+","+g+","+b+","+a+')';
  btn.style.color = 'rgb('+r+","+g+","+b+')';

}); 

