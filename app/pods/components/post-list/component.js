import Component from '@ember/component';
import {inject as service} from '@ember/service';


export default Component.extend({
  store: service(),
    
  async init() {
    this._super(...arguments);
    const posts =  await this.store.findAll('post');
    this.set('posts',posts);
    const firstPost = await this.store.peekRecord('post',1);

  }
});

