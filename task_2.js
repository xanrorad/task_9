function maxSalary(salaries){  
    var sum = 0;  
    for(var key in salaries)  
        sum +=salaries[key];  
        return sum;  
    }  
    var salaries = {  
        Cris: 150,  
        Brain: 600,  
        John: 300,  
        Steve: 400,  
        Bill: 50  
    };  
    
alert(maxSalary(salaries)); 