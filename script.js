// Agar son 3 ga qoldiqsiz bo'linsa "Fizz" yozuvi chiqsin agar son 5 ga qoldiqsiz bo'linsa "Buzz" yozuvi chiqsin, agar son ikkalasiga ham qoldiqsiz bo'linsa "FizzBuzz" yozuvi chiqsin, ikkalasiga ham qo'ldiqsiz bo'linmasa sonning o'zi qaytsin.
eltext=document.querySelector('.text')
elinput=document.getElementById('input');


form.addEventListener('submit' ,function(e){
    e.preventDefault();
    
    let x=amont(elinput.value);
    
    function amont(n){
        if(!isNaN(n) && n!=""){
            if(n % 3==0 && n % 5==0){
                eltext.textContent='FizzBuzz';
            }else if(n % 5==0){
                eltext.textContent='Buzz';
            }else  if(n % 3==0){
                eltext.textContent='Fizz';
            }else if(n % 3!=0 && n % 5!=0){
                eltext.textContent=input.value;
            }
        }else{
            eltext.textContent='Raqam kiriting!';
        }
        return eltext.textContent;
    }
})



elspeed=document.getElementById('input1');
eltext1=document.querySelector('.text1');
elpiyoda=document.getElementById('piyoda');
elvelosiped=document.getElementById('velosiped');
elmashina=document.getElementById('mashina');
elsamolyod=document.getElementById('samolyod');

const Piyoda=3.6;
const Velosiped=20.1;
const Mashina=70;
const Samolyot=800;
form1.addEventListener('submit',function(e){
    e.preventDefault();
    
    let x=speed(elspeed.value);
    
    function speed(n){
        if(!isNaN(n) && n!=""){
           elpiyoda.innerHTML=(n/Piyoda).toFixed(1);
           elvelosiped.innerHTML=(n/Velosiped).toFixed(1);
           elmashina.innerHTML=(n/Mashina).toFixed(1);
           elsamolyod.innerHTML=(n/Samolyot).toFixed(4);

        }else{
            eltext1.textContent='Raqam kiriting!';
        }
        // return elpiyoda.innerHTML,elvelosiped.innerHTML,elmashina.innerHTML,elsamolyod.innerHTML;
    }
})
