import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    users: service(),
    userslist: null,
    init() {

        this._super(...arguments);
        this.set('userslist', this.users.listOfUsers)

    }
});