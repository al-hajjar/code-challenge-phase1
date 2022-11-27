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