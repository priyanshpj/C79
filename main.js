var student_array=[];
function submit(){
    s1=document.getElementById("student1").value;
    s2=document.getElementById("student2").value;
    s3=document.getElementById("student3").value;
    s4=document.getElementById("student4").value;   
    student_array.push(s1)
    student_array.push(s2)
    student_array.push(s3)
    student_array.push(s4) 
    document.getElementById("student_display").innerHTML=student_array; 
    document.getElementById("submit").style.display="none"; 
    document.getElementById("sort").style.display="inline";
}
function sort(){
    student_array.sort();
    document.getElementById("student_display").innerHTML=student_array;  
} 