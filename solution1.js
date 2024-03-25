let marks = 38;
 

if (marks>=79 && marks<=100) { //it prints grade "A" if marks is >=79 && <=100
    grade="A";
}
else if(marks>60 && marks <=79){//it prints grade "B" if marks is >60 && <=79
        grade="B";
}
else if(marks>50 && marks<=59){//it prints grade "C" if marks is >=50 && <=59
    grade="C";
}
else if(marks>=40 && marks<=49){//it prints grade "D" if marks is >=40 && <=49
    grade="D";
}
else if(marks<=40){//it prints grade "E" if marks is <=40
    grade="E";
}
console.log('you got a marks grade' + grade);