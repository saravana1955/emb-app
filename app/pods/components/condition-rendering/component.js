import Component from '@ember/component';

export default Component.extend({
  name: 'vashanth',

  employees: null,
  keys: null,
  bool:false,
  employeesList: null,
  
  init() {
    this._super(...arguments);
    const employees = [
      {
        name: 'john',
        age: 20,
        salary: 10,
        status: 'active',
      },
      {
        name: 'george',
        age: 25,
        salary: 20,
        status: 'inactive',
      },
      {
        name: 'kumar',
        age: 30,
        salary: 35,
        status: 'active',
      },
      {
        name: 'Raj',
        age: 30,
        salary: 35,
        status: 'active',
      },
      {
        name: 'karan',
        age: 20,
        salary: 45,
        status: 'inactive',
      },
    ];
    const keys = Object.keys(employees[0]);
    this.set('employees', employees);
    this.set('employeesList', employees);
    this.set('keys', keys);
  },

  actions:{
    inputChanged(value){
      //console.log(value)
      if(value){
        var empOutput = this.get('employees');
        this.set('employeesList', empOutput);
        this.set('bool',false);
      }else{
        var activeEmpList = this.get('employeesList').filter((emp) => emp.status == "active")
        this.set('employeesList', activeEmpList)
        this.set('bool',true);
      }
    },

    changeName(){
      var newName = "Suriya";
    }
  }
});

