import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Controller.extend({


   employee: service(),

  employees: computed.alias("employee.employees"),
  name:null,
  age:null,

buttonvalue:"ADD",
  ind:"",
  obj:"",
  actions: {
    note() {

      if (this.buttonvalue == "update") {
        const name = this.get('name');
        const age = this.get('age');
        const employees = this.get('employees');
        const details = {
          name,
          age
        };
        this.set("buttonvalue", "ADD");
        const obj=this.get('obj')
        employees.removeObject(obj);
const val=this.get("ind")

        employees.insertAt(val,details)
        console.log(employees)
        this.set("employee.employees",employees)
        this.set('name',"")
        this.set('age','')

      }

      else {
        const name = this.get('name');
        const age = this.get('age');
        const employees = this.get('employees');
        const details = {
          name,
          age
        };
        employees.pushObject(details);

        this.set("employee.employees",employees)

        this.set('name',"")
        this.set('age','')
      }
    }
    ,

    delete(emp) {
      const employees = this.get('employees');
      employees.removeObject(emp);
      console.log(employees);
      this.set("employee.employees",employees)

    },



    edit(emp, index) {


      this.set("name", emp.name);
      this.set("age", emp.age);
      this.set("buttonvalue", "update")
  this.set("ind",index)
      const val=this.get('ind')
      console.log(val)
      this.set("obj",emp)

    }



  }


});


