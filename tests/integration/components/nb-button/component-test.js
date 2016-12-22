import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
let gestures = Ember.Service.extend({
  addEventListener(){},
  removeEventListener(){}

});

let themeService = Ember.Service.extend({
  insertRule(){},
  initThemesForComponent(){},
  setInstanceCSSRuleProperty(){},
  deleteInstanceRules(){}
});

moduleForComponent('nb-fab', 'Integration | Component | nb button', {
  integration: true,
  beforeEach: function () {
    this.register('service:gestures', gestures);
    this.inject.service('gestures', { as: 'gestures' });
    this.register('service:themeService',themeService);
    this.inject.service('themeService',{as:'theme-service'});
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nb-fab}}`);

  assert.equal(this.$().text().trim(), '');


});
