import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  photoUrl: DS.attr('string'),
  bio: DS.attr('string'),
  occupation: DS.attr('number')
});
