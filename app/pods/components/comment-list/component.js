
  import Component from '@ember/component';
  import {inject as service} from '@ember/service';
  
  
  export default Component.extend({
    store: service(),
    
    enterName:"",
    enterAge:"",
    enterPlace:"",
    enterSalary:"",
    enterPhone:"",
    enterEmail:"",
    
    
     init() {
      
        const employees = [
            {
                name: 'John',
                age: 20,
                place: "Chennai",
                salary: 10000,
                phone:7991234579,
                email:"john@gmail.com"
            },
            {
                name: 'George',
                age: 25, 
                place: "Tirunelveli",
                salary: 20000,
                phone:8732123467,
                email:"george@gmail.com"
            },
            {
                name: 'Kumar',
                age: 30,
                place: "Tuticorin",
                salary: 35000,
                phone:7934123490,
                email:"kumar@gmail.com"
            },
            {
                name: 'Santhosh',
                age: 26,
                place: "Tuticorin",
                salary: 45000,
                phone:9782123456,
                email:"santhose@gmail.com"
            },
          ]

        this._super(...arguments);
        this.set('employees',employees); 
        this.employees=employees;
    },
    actions :
    {
      addclick()
      {
        var newEmp={

          name:this.get("enterName"),
          age:this.get("enterAge"),
          place:this.get("enterPlace"),
          salary:this.get("enterSalary"),
          phone:this.get("enterPhone"),
          email:this.get("enterEmail")
        
        };
        this.get('employees').pushObject(newEmp);

      },
      onNameChanger(e)
      {
           this.set('enterName',e.target.value);       
      },
      onAgeChanger(e){
        this.set('enterAge',e.target.value); 
      },
      onPlaceChanger(e){
        this.set('enterPlace',e.target.value);  
      },
      onSalaryChanger(e){
        this.set('enterSalary',e.target.value); 
      },
      onPhoneChanger(e)
      {
        this.set('enterPhone',e.target.value);
      },
      onEmailChanger(e)
      {
        this.set('enterEmail',e.target.value);
      }

    }

  });
  
  