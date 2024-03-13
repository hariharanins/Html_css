let CelciusInput = document.querySelector('#Celcius > input')
let FahrenheitInput = document.querySelector('#Fahrenheit > input')
let KelvinInput = document.querySelector('#Kelvin > input')
let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}

CelciusInput.addEventListener('input',function(){
    let CTemp = parseFloat(CelciusInput .value)
    let FTemp = (CTemp*(9/5)) + 32
    let KTemp = CTemp + 273.15

    FahrenheitInput.value = roundnumber(FTemp)
    KelvinInput.value = roundnumber(KTemp)
})
FahrenheitInput.addEventListener('input',function(){
    let FTemp = parseFloat(FahrenheitInput .value)
    let CTemp = (FTemp - 32) * (5/9)
    let KTemp = (FTemp - 32) * (5/9) + 273.15

    CelciusInput.value = roundnumber(CTemp)
    KelvinInput.value = roundnumber(KTemp)
})
KelvinInput.addEventListener('input',function(){
    let KTemp = parseFloat(CelciusInput .value)
    let CTemp = KTemp - 273.15
    let FTemp = (KTemp - 273.15) * (9/5) + 32

    CelciusInput.value = roundnumber(CTemp)
    FahrenheitInput.value = roundnumber(FTemp)
})
btn.addEventListener('click',()=>{
    CelciusInput.value=" "
    FahrenheitInput.value=" "
    KelvinInput.value=" "
})