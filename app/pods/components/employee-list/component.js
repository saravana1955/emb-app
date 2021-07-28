import Component from '@ember/component';
import {inject} from '@ember/service';



export default Component.extend({
 employees:null,
 newName:"",
 newAge:"",
 newSalary:"",
 name: inject(),
 name1:"Anish",
     
  init() {

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
        }
      ];
      this.set('employees',employees)
  },

actions:{
  addbtn()
  {
    let newArr={
      name: this.get("newName"),
      age:this.get("newAge") ,
      salary: this.get("newSalary")
    };
    this.get('employees').pushObject(newArr);
    this.set("newName","");
    this.set("newAge","");
    this.set("newSalary","");
    document.getElementById("user-question").value=null;
    document.getElementById("user-question1").value=null;
    document.getElementById("user-question2").value=null;
   },

  nameChange(e)
  {
    this.set("newName",e.target.value);
    
  },

  
  ageChange(e)
  {
    this.set("newAge",e.target.value);
    
  },

 
  salaryChange(e)
  {
    this.set("newSalary",e.target.value);
    
  }
}
});


