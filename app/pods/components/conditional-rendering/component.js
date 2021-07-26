import Component from '@ember/component';



export default Component.extend({
employees:null,
 init() {

    this._super(...arguments);
    const employees = [
        {
          name: 'john',
          age: 20,
          salary: 10,
          status: "active"
        },
        {
          name: 'george',
          age: 25,
          salary: 20,
          status: "active"
        },
        {
          name: 'kumar',
          age: 30,
          salary: 35,
          status: "inactive"
        },
        {
          name: 'abc',
          age: 18,
          salary: 55,
          status: "active"
        },
        {
          name: 'pqr',
          age: 22,
          salary: 75,
          status: "inactive"
        }
      ];
      this.set('employees',employees)
  },

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  action:{
    ischecked()
    {
      let isChecked = document.getElementById('activepeople');
      console.log(isChecked);
      document.querySelector('#activepeople:checked') !== null
    }
  }

});

