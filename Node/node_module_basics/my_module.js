module.exports = function() {
    return {
        greet : function(){
            console.log("Using a module!");
        },
        add : function(num1, num2){
            console.log("the sum is:", num1 + num2);
        }
    }
}