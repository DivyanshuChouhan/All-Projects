const form =document.querySelector('form')

    //Creating Result
    let result = document.createElement('p')
    let final = document.createTextNode('')
    result.appendChild(final)
    result.style.fontSize='1.8rem'
    result.style.fontWeight='600'
    form.appendChild(result)

    //Creating Guide
    let guide = document.createElement('p')
    let fguide = document.createTextNode('')
    guide.id = 'guide-new'
    guide.appendChild(fguide)
    form.appendChild(guide)
    guide.style.fontSize='1.8rem'
    guide.style.fontWeight='600'


    //Event
    form.addEventListener('submit',(e)=>{
        //Prevent to go to database
    e.preventDefault()
   
    //Height and Weight
    let weight =parseInt(document.getElementById('weight').value)
    let height = parseInt(document.getElementById('height').value);
   
    //Conditions when to give what values
    if ( height=== '' ||  height<0 || isNaN(height)) {
       result.innerHTML="Provide Valid data"
    }else if(weight=== '' ||  weight<0 || isNaN(weight)){
        result.innerHTML="Provide Valid data"
    }
    else{
        let total = (weight/height/height)*10000;
        
        //Final result
        result.innerHTML=`BMI is :${total.toFixed(1)}`;

        //Conditions for Guide
        if (total<18.6) {
            guide.innerHTML="You Are UnderWeight"
        }else if (total>18.6 && total<24.9) {
            guide.innerHTML="You Are NormalWeight"
        }else{
            guide.innerHTML="You Are OverWeight"
        }
    }

    
})