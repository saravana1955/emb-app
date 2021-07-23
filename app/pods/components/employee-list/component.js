import Component from '@ember/component';
// import {inject as service} from '@ember/service';


export default Component.extend({
  name : 'vashanth',
  
  employees:null,
  keys:null,

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

 actions: {
    addUser(){
        let newData = {};
       
        
        let keys=this.get('keys');
        for(let i=0;i<keys.length;i++){
            
            var objKey = keys[i];
            newData[objKey] = document.getElementById(objKey).value; 
            
        }
       
        this.get("employees").pushObject(newData);
       
        document.getElementById("myForm").reset();
    }

 }

});


 