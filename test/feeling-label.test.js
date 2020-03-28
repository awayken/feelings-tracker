import { expect, fixture, html } from '@open-wc/testing';

describe('feeling-label', () => {
  it('works', async () => {
    const el = await fixture(html`
      <feeling-label></feeling-label>
    `);
    expect(el).dom.to.equalSnapshot();
  });

  it('renders generic type', async () => {
    const el = await fixture(html`
      <feeling-label label="atrabilious"></feeling-label>
    `);
    expect(el).dom.to.equalSnapshot();
    expect(el.getAttribute('label')).to.equal('atrabilious');
    expect(el.label).to.equal('atrabilious');
  });
});
