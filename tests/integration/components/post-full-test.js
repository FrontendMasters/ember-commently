import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-full', 'Integration | Component | post full', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs `{{post-full}}`);
    let innerText = this.$().text().replace(/\s+/g, '');
    assert.ok(innerText.indexOf('WrittenAt') >= 0, 'Written At is present');
});