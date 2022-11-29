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