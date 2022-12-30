class School {
  constructor(name, numberOfStudents,level) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(value) {
    if (typeof value == "number") {
      this._numberOfStudents = value;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(
      Math.random() * substituteTeachers.length
    );
    return substituteTeachers[randomNumber];
  }
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._level = "primary";
    this.pickupPolicy = pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
        this._level = "middle";
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents,sportsTeams) {
    super(name, numberOfStudents);
    this._sportsTeams = sportsTeams;
        this._level = "high";
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
  set sportsTeams(value) {
    this._sportsTeams.push(value);
  }
}
let c = (prop) => {
  console.log(prop);
};
let lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
c(lorraineHansbury.numberOfStudents);
lorraineHansbury.quickFacts();
c(
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
))
let alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.quickFacts()
c(alSmith.sportsTeams)
