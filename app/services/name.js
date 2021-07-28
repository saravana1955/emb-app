import Service,{inject} from "@ember/service"; 

export default Service.extend({
    fullname : 'vashanth',
  
    employees : [
        {
            name: 'john',
            age: 20,
            salary: 10,
          },
          {
            name: 'george',
            age: 25,
            salary: 20,
          },
          {
            name: 'kumar',
            age: 30,
            salary: 35,
          },
          {
            name: 'Raj',
            age: 30,
            salary: 35,
          },
          {
            name: 'karan',
            age: 20,
            salary: 45,
          },
    ]

});