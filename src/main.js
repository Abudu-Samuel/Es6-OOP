/**
 * @class Staff
 */
class Staff {
  /**
   * intializes the class props
   * @param {String} firstName
   * @param {String} lastName
   * @param {String} gender
   * @param {Number} salary
   * @param {Number} age
   * @param {String} department
   * @param {String} maritalStatus
   */
  constructor(firstName, lastName, gender, salary, age, department, maritalStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.salary = salary;
    this.age = age;
    this.department = department;
    this.maritalStatus = maritalStatus;
  }
  /**
   * return staffinfo
   */
  get StaffInfo() {
    return `${this.firstName} ${this.lastName} ${this.gender} ${this.salary} ${this.age} ${this.department} ${this.maritalStatus}`;
  }
  /**
   * return tax
   */
  get tax() {
    const taxAmount = 0.2;
    return `my monthly tax is #${this.salary * taxAmount}`;
  }
}
/**
 * @class Manager
 */
class Manager extends Staff {
  /**
   *
   * @param {String} firstName
   * @param {String} lastName
   * @param {String} gender
   * @param {number} salary
   * @param {Number} age
   * @param {String} department
   * @param {String} maritalStatus
   * @param {String} hobby
   */
  constructor(firstName, lastName, gender, salary, age, department, maritalStatus, hobby) {
    super(firstName, lastName, gender, salary, age, department, maritalStatus);
    this.hobby = hobby;
  }
  /**
   * return staffInfo
   */
  get StaffInfo() {
    if (this.maritalStatus === 'married') {
      return `Hi guys, my name is ${this.firstName} ${this.lastName}, I'm happily married. My basic salary is #${this.salary} I'm ${this.age} years old, i work in ${this.department} department. My hobby is ${this.hobby} lol`;
    } else if (this.maritalStatus === 'single') {
      return `Hi guys, my name is ${this.firstName} ${this.lastName}, I'm Single and searching. My basic salary is #${this.salary} I'm ${this.age} years old, i work in ${this.department} department. My hobby is ${this.hobby} lol`;
    }
    return `Hi guys, my name is ${this.firstName} ${this.lastName}, I'm divored, not interested in marriage. My basic salary is #${this.salary} I'm ${this.age} years old, i work in ${this.department} department. My hobby is ${this.hobby} lol.`;
  }
}
// const staff1 = new Staff('John', 'Doe', 'male', 10000, 21, 'library', 'married');
// const manager1 = new Manager('Lucy','Cage', 'female', 10000, 45, 'records', 'single', 'gossing');
export default { Staff, Manager };
// console.log(staff1.StaffInfo);
// console.log('===================');
// console.log(staff1.tax);
// console.log('===================');
// console.log(manager1.StaffInfo);
// console.log('===================');
// console.log(manager1.tax);

