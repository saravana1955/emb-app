import Component from '@ember/component';
// import {inject as service} from '@ember/service';


export default Component.extend({
  name : 'vashanth',
  
  employees:null,

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
    this.set("employees",employees);
}

});
