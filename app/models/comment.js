import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  name: attr('string', {defaultValue: ''}),
  email: attr('string', {defaultValue: ''}),
  body: attr('string', {defaultValue: ''}),
});
