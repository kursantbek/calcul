
var Numbers=document.getElementsByClassName("numpressed"),
    Operations=document.getElementsByClassName("operation"),
    DecimalBtn=document.getElementById("decimal"),
    ClearBtn=document.getElementById("clear"),
    ClearEnteryBtn=document.getElementById("clearentry"),
    PrecentBtn=document.getElementById("percent"),
    NegBtn=document.getElementById("neg"),
    Display=document.getElementById("ReadOut"),
    MemoryCurrentNumber='0',
    MemoryNewNumber=false,
    MemoryPendingOperation='';
    

console.log(Numbers);
console.log(Operations);
console.log(DecimalBtn);
console.log(ClearBtn);
console.log(ClearEnteryBtn);
console.log(PrecentBtn);
console.log(NegBtn);

for( var i=0; i<Numbers.length; i++){
    var numberBtn=Numbers[i];
    numberBtn.addEventListener('click',function(e){
       numberPress(e.target.textContent);
    });
};

for (var i=0;i<Operations.length;i++){
    OperationsBtn=Operations[i];
    OperationsBtn.addEventListener('click',function(e){
        operation(e.target.textContent);
    });
};

DecimalBtn.addEventListener('click',function(e){
    decimal(e.target.innerText);
});

ClearBtn.addEventListener('click',function(e){
    clear(e.target.innerText);
});

ClearEnteryBtn.addEventListener("click",function(e){
    clearentery(e.target.innerText);
});

PrecentBtn.addEventListener("click",function(e){
    percent(e.target.innerText);
});

NegBtn.addEventListener("click",function(e){
    neg(e.target.innerText);
})

function numberPress(num){
   if(MemoryNewNumber){
       Display.value=num;
       MemoryNewNumber=false;
   }else{
       if(Display.value==='0'){
           Display.value=num;
       }else{
           Display.value +=num;
       };
   };
    console.log("pressed button"+'' +  num +'!');
};

function operation(op){
    var localOperationMemory=Display.value;

    if(MemoryNewNumber && MemoryPendingOperation !== '='){
        localOperationMemory=MemoryCurrentNumber;
    }else{
        MemoryNewNumber=true;
        if(MemoryPendingOperation ==='+'){
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        }else if(MemoryPendingOperation ==='-'){
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        }
        else if(MemoryPendingOperation ==='/'){
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        }
        else if(MemoryPendingOperation ==='*'){
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        }else{
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        Display.value=MemoryCurrentNumber;
        MemoryPendingOperation=op;
    };
    console.log("pressed button"+op+'!');
};
function decimal(){
    var localDecimalMemory=Display.value;

    if(MemoryNewNumber){
        localDecimalMemory= '0.';
        MemoryNewNumber=false;
    }else{
        if(localDecimalMemory.indexOf('.') === -1){
            localDecimalMemory +='.';
        };
    };
    Display.value=localDecimalMemory;
};

function clear(cl){
    Accum = 0;
    PendingOp = "";
    clearentery();
    console.log("press button"+cl);
};

function clearentery(cln){
    ReadOut.value = "0";
        FlagNewNum = true;
    console.log("pressed"+cln);
};

function percent(pr){
    Display.value = (parseFloat(Display.value) / 100) * parseFloat(MemoryCurrentNumber);
    console.log("pressed"+pr);
};

function neg(n){
    Display.value = parseFloat(Display.value) * -1;
    console.log("pressed"+n);
};