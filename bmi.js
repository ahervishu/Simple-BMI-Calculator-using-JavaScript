function bmi(){
    var w,h,b,hm;
    
w = document.getElementById('weight').value;
h = document.getElementById('height').value;
    if(w<0){
        alert('PLEASE ENTER WEIGHT IN POSITIVE NUMBER')
    }
    else if(h<0){
        alert('PLEASE ENTER HEGHT IN POSITIVE NUMBER')
    }
        hm= h / 3.2808;
        b= w / (hm*hm); 
        b= Math.round(b);
        if(b<18.5){
            alert('BMI is :- '+ b +'\nYou are in Underweight');
         }
        else if(b>24.9)
                {
                    alert('BMI is :- '+ b +'\nYou are in Overweight');
                }
        else{
                alert('BMI is :- '+ b +'\nYou are in Normal weight');
            }
                document.getElementById('result').value=b;
                //alert(b);
}