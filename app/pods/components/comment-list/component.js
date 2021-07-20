
  import Component from '@ember/component';
  import {inject as service} from '@ember/service';
  
  
  export default Component.extend({
    store: service(),
      
     init() {
        const employees = [
            {
                name: 'John',
                age: 20,
                place: "Chennai",
                salary: 10000
                
            },
            {
                name: 'George',
                age: 25, 
                place: "Tirunelveli",
                salary: 20000
            },
            {
                name: 'Kumar',
                age: 30,
                place: "Tuticorin",
             salary: 35000
            },
            {
                name: 'Santhosh',
                age: 26,
                place: "Tuticorin",
             salary: 45000
            },
          ]
        this._super(...arguments);
        this.set('employees',employees); 
        this.employees=employees;
    
    }
  });
  
  