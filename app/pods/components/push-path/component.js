import Component from '@ember/component';
import {inject as service} from '@ember/service';


export default Component.extend({


  store: service(),

  async init() {
    this._super(...arguments);
    // api call  GET baseurl/posts
    const comment =  await this.store.findAll('comment');
    this.set('comments',comment);
  }






});
