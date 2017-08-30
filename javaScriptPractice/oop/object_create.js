console.log("//----------------------------------1 Object.create(className)--------------------------");
var Student = {
    name: "Bimal Parajuli",
    studentNo: 985387,
    sayhello: function(){
        console.log("hello "+this.name);
    }
};

//could add a function directly
Student.saygoodbye=function(){
    console.log("goodbye "+this.name);
}

Student.sayhello();
Student.saygoodbye();




//create object
student = Object.create(Student);//does not have a copy of his own
console.log(student);//empty thing....not a subclass
//console.log(student instanceof Student);//only work for constructor function
student.sayhello();
student.saygoodbye();


//override
console.log("0-------override--");
student.saygoodbye=function(){
    console.log("overiden: see you again "+this.name);
}

Student.saygoodbye();
student.saygoodbye();

console.log("1-------show all the keys in Student---");
for (var key in Student) {
    console.log(key); // name, course, studentNo
}
console.log("2-------show all the keys in detail in Student --");
console.log(Object.keys(Student)); // [name, course, no]

// Object.create(student)

console.log("3-------show Student.name and stu.name");
console.log(Student.name); // Bimal Parajuli
console.log(student.name); // Bimal Parajuli
console.log("4-------");
for (var key in student) {
    console.log(key); // name, course, no
}
console.log("5-------");
console.log(Object.keys(Student)); // ["name", "course", "studentNo"]
console.log(Object.keys(student)); // []

delete Student.studentNo;
console.log("6-------delete Student.studentNo;---");
console.log(Student);//{name: "Bimal Parajuli", course: "Web Application Programming"}
console.log(student);