import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import {computed} from "@ember/object";

export default Controller.extend({

  name: "",
  age: "",
  disableUndobtn: true,
  disab: true,


  actions: {

    off() {

      this.set("disableUndobtn", false)
      const name = this.get('name');
      const age = this.get('age');

      if (name.length > 0 || age.length > 0) {
        this.set('disab', false)
      }


    },
    onInput(event) {
      this.set('name', event.target.value)
      const name = this.get('name');
      const age = this.get('age');

      if (name.length > 0 && age.length > 0) {

        this.set('disab', false)
      }
    },
    onInput1(event){

      this.set('age', event.target.value)
      const name = this.get('name');
      const age = this.get('age');

      if (name.length > 0 && age.length > 0) {

        this.set('disab', false)
      }
    }



  }


});
