import Component from '@ember/component';

export default Component.extend({
    myname:"Anish",
    init()
    {
        this._super(...arguments);
        this.namechange=this.namechange.bind(this);

    },
    namechange()
    {
        this.set('myname','Anish Victor');
    },

});