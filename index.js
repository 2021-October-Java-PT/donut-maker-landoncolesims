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


const donuts = {
    donutCount: 0, 
    donutClickValue: 10,
    donutMultiplierCount: 0,
    donutMultiplier: 1,
    donutAutoClicker: 0,
    donutAutoClickerCost: 100,
    donutMultiplierCost: 10,
    get count(){
        return this.donutCount;
    },
    get numOfMultipliers(){
        return this.donutMultiplierCount;
    },
    get multiplier(){
        var index2;
        index2 = this.donutMultiplierCount;
        this.donutMultiplier = 1.2**index2;
        return this.donutMultiplier;
    },
    get clickValue(){
        return this.donutClickValue;
    },
    get autoClickerValue(){
        return this.donutAutoClicker;
    },
    get autoClickerCost(){
        var index;
        index=this.donutAutoClicker;
        this.donutAutoClickerCost = 100*(1.1**index);
        return this.donutAutoClickerCost;
    },
    get multiplierCost(){
        var index1;
        index1 = this.donutMultiplierCount;
        this.donutMultiplierCost = 10*(1.1**index1);
        return this.donutMultiplierCost;
    }
}

setInterval(function(){
        //here because it updates everysecond
        //probably should put all buisness metrics and expenses here if possible
        donutsPerSecond.innerText = Number(donuts.autoClickerValue * donuts.clickValue * donuts.multiplier).toFixed(2);
        donutsPerClick.innerText = Number(donuts.clickValue * donuts.multiplier).toFixed(2);
        
        if(donuts.autoClickerCost>donuts.donutCount)
        {
            document.getElementById("purchaseAutoClicker").disabled = true;
            clickerCostClicks.innerText = Number((donuts.autoClickerCost-donuts.donutCount)/donuts.clickValue).toFixed(2);
        } else {
            document.getElementById("purchaseAutoClicker").disabled = false;
            clickerCostClicks.innerText = 0;
        }
        if(donuts.multiplierCost>donuts.donutCount)
        {  
            document.getElementById("purchaseMultiplier").disabled = true;
            multiplierCostClicks.innerText= Number((donuts.multiplierCost-donuts.donutCount)/donuts.clickValue).toFixed(2);
        } else {
            document.getElementById("purchaseMultiplier").disabled = false;
            multiplierCostClicks.innerText = 0;
        }
        
},20);


function makeDonuts(){
    const donutMakingBtn = document.querySelector('#makeDonuts');
   
    donutMakingBtn.addEventListener('click',()=>{
        donuts.donutCount += (donuts.clickValue * donuts.multiplier);
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

        
        if(donuts.count>=donuts.autoClickerCost){
            donuts.donutCount -= donuts.autoClickerCost;
            donutCounter.innerText = Number(donuts.count).toFixed(2);
            donuts.donutAutoClicker++;
            autoClickerCounter.innerText = donuts.autoClickerValue;
            clickerCost.innerText = Number(donuts.autoClickerCost).toFixed(2);
        }else{
            alert('not enough dough');
        }  
    });
    
    setInterval(function(){
        if(donuts.autoClickerValue>0){
            donuts.donutCount += (donuts.clickValue*donuts.donutAutoClicker*donuts.multiplier);
            donutCounter.innerText = Number(donuts.count).toFixed(2);
        } else{
      
        }
    },1000);
}

function clickmultiplier(){
    const multiplierBtn = document.querySelector('#purchaseMultiplier');
    
    multiplierBtn.addEventListener('click',()=>{
        if(donuts.count>=donuts.multiplierCost){
            donuts.donutCount -= donuts.multiplierCost;
            donutCounter.innerText = Number(donuts.count).toFixed(2);
            donuts.donutMultiplierCount++;
            donuts.donutMultiplier = donuts.multiplier;
            numberOfMultipliers.innerText = Number(donuts.donutMultiplierCount).toFixed(2);
            multCost.innerText = Number(donuts.multiplierCost).toFixed(2);
            multValue.innerText = Number(donuts.multiplier).toFixed(2);
        } else{
            alert('not enough dough');
        }
        
    });
}

