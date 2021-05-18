import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  firstName: attr('string', {defaultValue: ''}),
  lastName: attr('string', {defaultValue: ''}),
  twitter: attr('string', {defaultValue: ''}),

});
