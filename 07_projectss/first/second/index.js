const form=document.querySelector('form')
//this usecase will give you empty value, coz it stores value just after page will load.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  //this store actual value after we click submit button
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML=`please give a valid height ${height}`;
  }else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML=`please give a valid weight ${weight}`;
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    //showing result --
    // result.innerHTML = `<span>${bmi}</span>`

    if(bmi<18.6){
      result.innerHTML=`<span> UnderWeight ${bmi}</span>`
    }else if(bmi<25){
      result.innerHTML=`<span> Normal Range ${bmi}</span>`
    }else{
      result.innerHTML=`<span> OverWeight ${bmi}</span>`
    }
  }
})