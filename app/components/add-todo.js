import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      const text = this.get('text');
      this.attrs.onAdd(text);
      this.set('text', '');
      test.$('input').focus();
    }
  }
});
