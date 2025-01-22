var val="";
function numeric(num){
    val+=num;
    update();
}
function op(operator){
    if(val.includes("%")){
        val=(parseFloat(val.replace("%","")/100)).toString();
    }
    if(val===""&&operator==="-"){
        val="-";
    }
    else if(/[\+\-\*\/]$/.test(val)){
        val=val.slice(0,-1)+operator;
    }
    else if(val!==""&&!/[\+\-\*\/]$/.test(val)){
        val+=operator;
    }
    update();
}
function AC(){
    val="";
    update();
}
function CE(){
    val=val.slice(0,-1);
    update();
}
function point(){
    if(val.includes(".")===false){
        val+=".";
        update();
    }
}
function per(){
    if(val!==""){
        val+="%";
        update();
    }
}
function update(){
    document.getElementById("output").value=val.replace(/\*/g,'×').replace(/\//g,'÷');
}
function calculation(){
    try{
        if(val.includes("%")){
            val = (parseFloat(val.replace("%", "")) / 100).toString();
        }
        val=String(eval(val));
        update();
    }catch(error){
        val="error";
        update();
    }
}
document.addEventListener("keydown",function(event){
    const key=event.key;
    if(key==="+"||key==="-"||key==="/"||key==="*"){
        op(key);
    }
    if(!isNaN(key)&&key!=" "){
        numeric(key);
    }
    if(key==="Enter" ||key==="="    ){
        calculation();
    }
    if (key === "Backspace") {
        CE();
    }
    if (key === "Escape") {
        AC();
    }
    if (key === ".") {
        point();
    }
    if (key === "%") {
        per();
    }
});