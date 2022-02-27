// 入力機能

// 各ボタンを用意して、数字と演算子を入力出来るようにします。
// - 数字は 0 ~ 9
// - 演算子は 「+」、「-」、「*」、「/」
// - 「=」 合計ボタン
// 入力された値を計算のために data 属性に保持するようにしてください。

// 数字
// - 数値を連続して入力する場合は、常に 1 の位に入力されるようにし、それ以前の入力値は桁が繰り上がるようにしてください。

// 演算子
// - 直前に入力した値が数字の場合、演算子が入力されたらその演算子が最後に来るようにしてください。
// - 演算子を続けて入力する場合は、最後の演算子が反映されるようにしてください。
// - 演算子から数式を始められないように注意して下さい。

// 表示機能

// - 入力されている途中式を常に画面に表示するようにしてください。
// - 表示する途中式は数式として正常な式になるように、また数字と演算子の間に半角スペースを空けて表示してください。

// 計算機能

// - 「=」ボタンを押下したら、それまで保存した数式から計算して、その計算結果を画面に表示してください。


/* 
    todo
        ・デザイン
        ・テスト

*/
new Vue({
    el: "#app",
    data: {
        beforeCalculation: "",
        result: 0,
        resultArray: [],
    },
    computed: {
    },
    methods: {
        addOperator: function(operator){
            if(this.beforeCalculation.substr(-1, 1) === " "){
                this.beforeCalculation = this.beforeCalculation.slice(0, -3);
            }
            this.beforeCalculation += operator;
        },
        calculate: function(){
            this.readyCalculate();
            this.doCalculate();
        },
        readyCalculate: function(){
            this.resultArray = this.beforeCalculation.split(" ");
            this.beforeCalculation = "";
        },
        doCalculate: function(){
            this.result = 0;
            let index = 0;

            switch(this.resultArray[index+1]){
                case "+":
                    this.result = parseInt(this.resultArray[index]) + parseInt(this.resultArray[index+2]);
                    break;
                case "-":
                    this.result = parseInt(this.resultArray[index]) - parseInt(this.resultArray[index+2]);
                    break;
                case "*":
                    this.result = parseInt(this.resultArray[index]) * parseInt(this.resultArray[index+2]);
                    break;
                case "/":
                    this.result = parseInt(this.resultArray[index]) / parseInt(this.resultArray[index+2]);
                    break;
            }
            index = index+3;

            while(this.resultArray.length >= index){
                switch(this.resultArray[index]){
                    case "+":
                        this.result = this.result + parseInt(this.resultArray[index+1]);
                        break;
                    case "-":
                        this.result = this.result - parseInt(this.resultArray[index+1]);
                        break;
                    case "*":
                        this.result = this.result * parseInt(this.resultArray[index+1]);
                        break;
                    case "/":
                        this.result = this.result / parseInt(this.resultArray[index+1]);
                        break;
                }
                index = index+2;
            }
        }
    },
})