var student_list = [];
function submit() {
    for(var i = 1; i <= student_list.length; i++) {
        var name_one = document.getElementById("name_of_the_student_"+i).value;
        student_list.push()
    }
    var name_one = document.getElementById("name_of_the_student_one").value;
    var name_two = document.getElementById("name_of_the_student_two").value;
    var name_three = document.getElementById("name_of_the_student_three").value;
    var name_four = document.getElementById("name_of_the_student_four").value;
    student_list.push(name_one);
    student_list.push(name_two);
    student_list.push(name_three);
    student_list.push(name_four);
    document.getElementById("display_name").innerHTML = student_list;
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";
}
function sorting() {
    student_list.sort();
    document.getElementById("display_name").innerHTML = student_list;
}



