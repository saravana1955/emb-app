import Component from '@ember/component';
import {inject} from '@ember/service';


export default Component.extend({

  name: inject(),
  async init() {
    this._super(...arguments);
    
    // // api call  GET baseurl/posts
    // const posts =  await this.store.findAll('post');
    // this.set('posts',posts); 
  }
});
