let marks = 38;
 

if (marks>=79 && marks<=100) {
    grade="A";
}
else if(marks>60 && marks <=79){
        grade="B";
}
else if(marks>50 && marks<=59){
    grade="C";
}
else if(marks>=40 && marks<=49){
    grade="D";
}
else if(marks<=40){
    grade="E";
}
console.log('you got a marks grade' + grade);