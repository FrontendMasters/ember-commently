import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-tile', 'Integration | Component | post tile', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs `{{post-tile}}`);
    let innerText = this.$().text().replace(/\s+/g, '');
    assert.ok(innerText.indexOf('') >= 0, '');

});