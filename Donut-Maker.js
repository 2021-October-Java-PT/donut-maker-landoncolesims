class DonutMaker{
    donuts = {
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
}

export default DonutMaker;

