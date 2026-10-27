function calculate(){

    let english =Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let physics = Number(document.getElementById("physics").value);
    let urdu = Number(document.getElementById("urdu").value);
    let chemistry = Number(document.getElementById("chemistry").value);


    let totalmarks = english + math + physics + urdu + chemistry;
    
    let percentage = (totalmarks /500)* 100;

    document.getElementById("percentage").innerText= percentage + "%" ;

    if (percentage >= 90){
        document.getElementById("grade").innerText = "Grade A+ | Pass ";

    }


    else if (percentage >= 85){
                document.getElementById("grade").innerText = "Grade A | Pass ";

    }

    else if(percentage >= 80){
                document.getElementById("grade").innerText = "Grade B | Pass ";

    }
     else if(percentage >= 70){
                document.getElementById("grade").innerText = "Grade C| Pass ";

    }
     else if(percentage >= 60){
                document.getElementById("grade").innerText = "Grade D | Pass ";

    }
     else {
                document.getElementById("grade").innerText = "Fail";

    }

    
}

function resetBtn () {

    document.getElementById("english").value="";
    document.getElementById("math").value="";
    document.getElementById("physics").value="";
    document.getElementById("urdu").value="";
    document.getElementById("chemistry").value="";
    //  button

    document.getElementById("percentage").innerText = "0%"
    document.getElementById("grade").innerText = "Result"
}