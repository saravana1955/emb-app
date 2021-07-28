import Component from '@ember/component';
import {inject} from '@ember/service';


export default Component.extend({
  // name: 'Anish',
  employees: null,
  keys: null,
  bool:false,
  employeesList: null,
  name: inject(),

  init() {
    this._super(...arguments);
    // const employees = [
    //   {
    //     name: 'john',
    //     age: 20,
    //     salary: 10,
    //     status: 'active',
    //   },
    //   {
    //     name: 'george',
    //     age: 25,
    //     salary: 20,
    //     status: 'inactive',
    //   },
    //   {
    //     name: 'kumar',
    //     age: 30,
    //     salary: 35,
    //     status: 'active',
    //   },
    //   {
    //     name: 'xyz',
    //     age: 30,
    //     salary: 35,
    //     status: 'active',
    //   },
    //   {
    //     name: 'pqr',
    //     age: 20,
    //     salary: 45,
    //     status: 'inactive',
    //   },
    // ];
    const keys = Object.keys(this.name.employees[0]);
    this.set('employees', this.name.employees);
    this.set('employeesList', this.name.employees);
    this.set('keys', keys);
  },
  actions:{
    isChecked(value){
      if(value){
        var empOutput = this.get('employees');
        this.set('employeesList', empOutput);
        this.set('bool',false);
      }else{
        var activeEmpList = this.get('employeesList').filter((emp) => emp.status == "active")
        this.set('employeesList', activeEmpList)
        this.set('bool',true);
      }
    }
  }
});

