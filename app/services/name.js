import Service, {inject} from '@ember/service';


export default Service.extend({
 name:inject(),
 newname1:"ANISH",

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
        name: 'xyz',
        age: 30,
        salary: 35,
        status: 'active',
      },
      {
        name: 'pqr',
        age: 20,
        salary: 45,
        status: 'inactive',
      },
    ];
    this.set('employees', employees);
}
 
});


