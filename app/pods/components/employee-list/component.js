import Component from '@ember/component';
// import {inject as service} from '@ember/service';


export default Component.extend({
  name : 'vashanth',
  
  employees:null,
  keys:null,
  newVal:"",
  newName: "",
  newAge: "",
  newSalary: "",

  init(){
    this._super(...arguments);
    const employees = [
        {
            name: 'john',
            age: 20,
            salary: 10
        },
        {
            name: 'george',
            age: 25,
            salary: 20
        },
        {
            name: 'kumar',
            age: 30,
            salary: 35
        },
    ];
    const keys = Object.keys(employees[0]);
    this.set("employees",employees);
    this.set("keys",keys);
 },

 resetFieldValue(){
    this.set('newName', '');
    this.set('newAge', '');
    this.set('newSalary', '');
 },

 actions: {
    addUser(){
        let newEmp = {
            name: this.get("newName"),
            age: this.get("newAge"),
            salary: this.get("newSalary"),
        };
        this.get("employees").pushObject(newEmp);
        this.resetFieldValue();
    },

}

});
 