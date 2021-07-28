
function bubbleSortA(inputArr){
    
    console.log("bubblesort");
  setTimeout(function() {

    

    setTimeout(function() {
        for(var x =0; x<=ColCounter;x++){  
            $('#frequencyItem'+ChangeCol[x]).css("backgroundColor", "white");
        }     
    },50)
    
    //ChangeCol = [];
    ColCounter =0;
    if(a<=n){
        a++;
        b=0;
        bubbleSortB(ObjHeights);
        bubbleSortA(ObjHeights);
        
    }
    //lockButtin(false);
   },50)
   console.log("Finished A");
   
}
for (let i = 1; i <= 6; i++) {



        setTimeout(function() { console.log(i) }, 1000*i);

  

}

function bubbleSortB(inputArr){
    //setTimeout(function() {
    if(b<n){
        //$('#frequencyItem'+(b)).css("backgroundColor", "green");
        if(inputArr[b+1] < inputArr[b]){
            $('#frequencyItem'+(b+1)).css("height", inputArr[b]);
            $('#frequencyItem'+b).css("height", inputArr[b+1]);
            $('#frequencyItem'+b).css("backgroundColor", "red");
            var tempValue = inputArr[b];
            inputArr [b] = inputArr[b+1];
            inputArr[b+1] = tempValue;

            ChangeCol[ColCounter] = b;   
            ColCounter ++; 
        }
        //$('#frequencyItem'+(b)).css("backgroundColor", "white");
        b++;
       
    bubbleSortB(ObjHeights);
    }
//}, 50)
return inputArr;
}

/*if ( i < n) {
            const ChangeCol = [];
            var ColCounter =0;
            i++;

            setTimeout(function() {
                tempCount++;
                //change starting color
                $('#frequencyItem'+(i-1)).css("backgroundColor", "grey");  
                $('#frequencyItem'+i).css("backgroundColor", "green");

                let current = inputArr[i];          
                let j = i-1;
                  
                //Find position for lower value
                while ((j > -1) && (current <  inputArr[j])) {          
                    inputArr[j+1] = inputArr[j];
                        $('#frequencyItem'+(j+1)).css("height", inputArr[j]);
                        $('#frequencyItem'+j).css("backgroundColor", "red"); 
                        ChangeCol[ColCounter] = j;   
                        ColCounter ++;             
                     j--;    
                    
                }
               
                //Wait to change colors back to grey
                setTimeout(function() {
                    for(var x =0; x<=ColCounter;x++){  
                        $('#frequencyItem'+ChangeCol[x]).css("backgroundColor", "grey");
                    }     
                },50)
              
                //put in new position
                inputArr[j+1] = current;
                $('#frequencyItem'+(j+1)).css("height", current);  

                //recall function
                insertionSort(ObjHeights);
                if(tempCount == (n-1)){
                    console.log("works");
                    lockButtin(false);
                }
            }, 50)

            
            
               
        }*/
     
    //return inputArr;
