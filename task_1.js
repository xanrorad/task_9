function mp3(model, memory){  
    return {model: model,  memory: memory,  
    displayInfo: function(){  
        alert(this.model +" " + this.memory);  
        }  
    }  
}  
    
var play = mp3("iphone", "16Gb");  
play.displayInfo(); 