let Student = function(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype.name = function(){
  return (`${this.firstName} ${this.lastName}`);

};
Student.prototype.enroll = function(course){
  if(this.hasConflict(course)) {
    throw 'Course conflict error!';
  }
  this.courses.push(course);
  course.students.push(this);
};
Student.prototype.courseLoad = function(){
  var hash = {};
  this.courses.forEach(function(course){
    if(hash[course.department]){
      hash[course.department] += course.credits;
    } else{
      hash[course.department] = course.credits;
    }
  });
  return hash;
};
Student.prototype.hasConflict = function(course) {
  this.courses.forEach(function(c) {
    if(c.conflictsWith(course)) {
      return true;
    }
  });
  return false;
};

let Course = function(name, department, credits, days, timeblock) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.timeblock = timeblock;
  this.students = [];
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(other) {
  if (this.block !== other.block) { return false; }

  return this.days.some(day => other.days.indexOf(day) !== -1 );
};


let student1 = new Student("Nigel", "Leffler");
let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
let course2 = new Course("201", "CS", 3, ["wed"], 1);
let course3 = new Course("301", "ENG", 3, ["tue"], 1);
let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
console.log(student1.name());
student1.enroll(course1);
student1.enroll(course3);
student1.enroll(course2);
console.log(student1.courseLoad());
console.log('should be true = ' + course1.conflictsWith(course2));
console.log('should be false = ' + course1.conflictsWith(course3));
console.log('should be false = ' + course1.conflictsWith(course4));
