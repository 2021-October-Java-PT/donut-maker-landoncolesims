import DonutMaker from "./Donut-Maker";
renderPage();

function renderPage(){
    inspiration();
    makeDonuts();
    autoClickerToMakeDonuts();
    clickmultiplier();
    //jordan waz here
}

function inspiration(){
    const inspirationLink = document.querySelector('#inspiration');
    
    inspirationLink.addEventListener('click',()=>{
        window.open('https://orteil.dashnet.org/cookieclicker/', '_blank');
    })
}
setInterval(function(){
    //here because it updates everysecond
    //probably should put all buisness metrics and expenses here if possible
    donutsPerSecond.innerText = Number(DonutMaker.donuts.autoClickerValue * DonutMaker.donuts.clickValue * donuts.multiplier).toFixed(2);
    donutsPerClick.innerText = Number(DonutMaker.donuts.clickValue * DonutMaker.donuts.multiplier).toFixed(2);
    
    if(DonutMaker.donuts.autoClickerCost>Donut.Makerdonuts.donutCount)
    {
        document.getElementById("purchaseAutoClicker").disabled = true;
        clickerCostClicks.innerText = Number((DonutMaker.donuts.autoClickerCost-DonutMaker.donuts.donutCount)/donuts.clickValue).toFixed(2);
    } else {
        document.getElementById("purchaseAutoClicker").disabled = false;
        clickerCostClicks.innerText = 0;
    }
    if(donuts.multiplierCost>donuts.donutCount)
    {  
        document.getElementById("purchaseMultiplier").disabled = true;
        multiplierCostClicks.innerText= Number((DonutMaker.donuts.multiplierCost-DonutMaker.donuts.donutCount)/DonutMaker.donuts.clickValue).toFixed(2);
    } else {
        document.getElementById("purchaseMultiplier").disabled = false;
        multiplierCostClicks.innerText = 0;
    }
    
},20);


function makeDonuts(){
const donutMakingBtn = document.querySelector('#makeDonuts');

donutMakingBtn.addEventListener('click',()=>{
    DonutMaker.donuts.donutCount += (donuts.clickValue * donuts.multiplier);
    donutCounter.innerText = donuts.count;
    
    
})
}
function autoClickerToMakeDonuts(){
const autoClickerBtn = document.querySelector('#purchaseAutoClicker');

// if(donuts.count<donuts.autoClickerCost){
//     autoClickerBtn.backgroundColor='gray';
// } else{}

// if (donuts.count<donuts.autoClickerCost){
// button.getBackground().setColorFilter(Color.GRAY, PorterDuff.Mode.MULTIPLY);
// }else{
// button.getBackground().setColorFilter(null);
// }
autoClickerBtn.addEventListener('click', ()=>{

    
    if(DonutMaker.donuts.count>=DonutMaker.donuts.autoClickerCost){
        DonutMaker.donuts.donutCount -= donuts.autoClickerCost;
        donutCounter.innerText = Number(donuts.count).toFixed(2);
        DonutMaker.donuts.donutAutoClicker++;
        autoClickerCounter.innerText = donuts.autoClickerValue;
        clickerCost.innerText = Number(donuts.autoClickerCost).toFixed(2);
    }else{
        alert('not enough dough');
    }  
});

setInterval(function(){
    if(donuts.autoClickerValue>0){
        DonutMaker.donuts.donutCount += (donuts.clickValue*donuts.donutAutoClicker*donuts.multiplier);
        donutCounter.innerText = Number(donuts.count).toFixed(2);
    } else{
  
    }
},1000);
}

function clickmultiplier(){
const multiplierBtn = document.querySelector('#purchaseMultiplier');

multiplierBtn.addEventListener('click',()=>{
    if(DonutMaker.donuts.count>=donuts.multiplierCost){
        DonutMaker.donuts.donutCount -= donuts.multiplierCost;
        donutCounter.innerText = Number(donuts.count).toFixed(2);
        DonutMaker.donuts.donutMultiplierCount++;
        DonutMaker.donuts.donutMultiplier = donuts.multiplier;
        numberOfMultipliers.innerText = Number(donuts.donutMultiplierCount).toFixed(2);
        multCost.innerText = Number(donuts.multiplierCost).toFixed(2);
        multValue.innerText = Number(donuts.multiplier).toFixed(2);
    } else{
        alert('not enough dough');
    }
    
});
}