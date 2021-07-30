import Component from '@ember/component';
// import employee from '../../service/employee';
//import {inject as service} from '@ember/service';
// var inject = Ember.inject;
import EmberObject, { computed } from '@ember/object';
import {inject} from '@ember/service';

export default Component.extend({
     name: inject(),
    //name:'vashanth*',

    employees:null,
    keys:null,
    newVal:"",
    newName: "",
    newAge: "",
    newSalary: "",
    emplen:"",
    namVar:"vashanth",

    emplen : computed('len', function(){
        return `${this.len}`;
    }),

    init() {
        this._super(...arguments);

        //the employee details are imported from service...

        // const employees = [
        //   {
        //     name: 'john',
        //     age: 20,
        //     salary: 10,
        //   },
        //   {
        //     name: 'george',
        //     age: 25,
        //     salary: 20,
        //   },
        //   {
        //     name: 'kumar',
        //     age: 30,
        //     salary: 35,
        //   },
        //   {
        //     name: 'Raj',
        //     age: 30,
        //     salary: 35,
        //   },
        //   {
        //     name: 'karan',
        //     age: 20,
        //     salary: 45,
        //   },
        // ];
        const keys = Object.keys(this.name.employees[0]);
        this.set('employees', this.name.employees);
        this.set('employeesList', this.name.employees);
        this.set('keys', keys);
        console.log(this.name.employees.length);
        const len = this.name.employees.length;
        const empava = len.emplen;
        

        this.changeName = this.changeName.bind(this);
    },   
    
    resetFieldValue(){
        this.set('newName', '');
        this.set('newAge', '');
        this.set('newSalary', '');
    },

    changeName(){
        this.set("namVar", 'Suriya');
    },

    actions: {
        addUser(){
            let newEmp = {
                name: this.get("newName"),
                age: this.get("newAge"),
                salary: this.get("newSalary"),
            };
            //console.log(this.employee.name);
            this.get("employees").pushObject(newEmp);
            this.resetFieldValue();
            //console.log(this.get(len));
        }

    }

});
 