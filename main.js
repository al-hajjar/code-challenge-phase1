const btn = document.getElementById("btn");

function formReset(){
    document.getElementById("myform").reset();
}
 
btn.addEventListener("click", function (event){
    event.preventDefault();
    var grade = document.getElementById("grade").value;
    const point = document.getElementById("point");

    console.log (grade);
    if (grade > 79){
        point.innerHTML = "A"
    }else if (grade <=79 && grade >=60 ){
        point.innerHTML = "B";
    }else if ( grade <=59 && grade >=49){
        point.innerHTML = "C";
    }else if (grade <=49 && grade >=40){
        point.innerHTML = "D";
    }else if (grade < 40 ){
        point.innerHTML = "E"
    }


    formReset();
});
//<!-- Speed Detector (Toy Problem) -->
const enter = document.getElementById("enter");

enter.addEventListener("click" , function (e){
    e.preventDefault();
    var speedDisplay = document.getElementById("speedDisplay").value;
    const speedLimit = 70;
    const output = document.getElementById("output");

    console.log (speedDisplay);
    console.log (speedLimit);

    let demirit = (speedDisplay - speedLimit)/5;
    console.log (demirit);
    if (speedDisplay < 70){
        output.innerHTML = "OK";
    }else if (speedDisplay > 70 && demirit <= 12){
        output.innerHTML = demirit;
    }else if ( demirit > 12){
        output.innerHTML = "Licensed Suspended";
    }

});
// Net Salary Calculator (Toy Problem)

const calculation = document.getElementById("calculation");

function formResetingg(){
    document.getElementById("reseting").reset();
}

calculation.addEventListener("click", function (yow){
    yow.preventDefault();
    var basicSalary = document.getElementById("money").value;

    console.log(basicSalary);
    const percantage = function (){
        if(basicSalary <= 24000){
            return 10;
        }else if(basicSalary > 24000 && basicSalary <= 32333){
            return 25;
        }else if(basicSalary > 32333){
            return 30;
        }
    }
    console.log(percantage);

    const nhif = function (){
        if (basicSalary <= 5900){
            return 150;
        }else if(basicSalary >= 6000 && basicSalary <= 7999){
            return 300;
        }else if(basicSalary > 7999 && basicSalary <= 11999){
            return 400;
        }else if(basicSalary > 11999 && basicSalary <= 14999){
            return 500;
        }else if(basicSalary > 14999 && basicSalary <= 19999){
            return 600;
        }else if(basicSalary > 19999 && basicSalary <= 24999){
            return 750;
        }else if(basicSalary > 24999 && basicSalary <= 29999){
            return 850;
        }else if(basicSalary > 29999 && basicSalary <= 34999){
            return 900;
        }else if(basicSalary > 34999 && basicSalary <= 39999){
            return 950;
        }else if(basicSalary > 39999 && basicSalary <= 44999){
            return 1000;
        }else if(basicSalary > 44999 && basicSalary <= 49999){
            return 1100;
        }else if(basicSalary > 49999 && basicSalary <= 59999){
            return 1200;
        }else if(basicSalary > 59999 && basicSalary <= 69999){
            return 1300;
        }else if(basicSalary > 69999 && basicSalary <= 79999){
            return 1400;
        }else if(basicSalary > 79999 && basicSalary <= 89999){
            return 1500;
        }else if(basicSalary > 89999 && basicSalary <= 99999){
            return 1600;
        }else if(basicSalary > 99999){
            return 1700;
        }
    }
    console.log(nhif);

    const kra = (basicSalary * 10)/100;
    const relief = 2400;
    const tax = (basicSalary * percantage())/100;
    const nssf = (basicSalary * 6)/100;
    const netSalary = (basicSalary - tax - nssf - nhif() - kra) + relief;
    const net = document.getElementById("net");
    const azgar = document.getElementById("azgar");
    const deductions = document.getElementById("deductions");
    const khatwib = document.getElementById("khatwib");
    const mohd = document.getElementById("mohd");
    const faruk = document.getElementById("faruk");
    const ahmed = document.getElementById("ahmed");
    const abuu = document.getElementById("abuu");
    const daudi = document.getElementById("daudi");
    
    console.log(netSalary);
    net.innerHTML = "Net Salary: " + netSalary;
    azgar.innerHTML = "Basic Salary: " + basicSalary;
    deductions.innerHTML = "Deductions";
    khatwib.innerHTML = "Tax: " + tax;
    mohd.innerHTML = "NSSF: " + nssf;
    faruk.innerHTML = "NHIF: " + nhif();
    ahmed.innerHTML = "KRA: " + kra;
    abuu.innerHTML = "RELIEF";
    daudi.innerHTML = "RELIEF: " + relief;

    // if (basicSalary <= 24000){
    //     alert(basicSalary - ((basicSalary * 10)/100))
    // }

    formResetingg();
});