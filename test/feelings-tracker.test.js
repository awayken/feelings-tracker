import { expect, fixture, html } from '@open-wc/testing';

describe('feelings-tracker', () => {
  it('works', async () => {
    const el = await fixture(html`
      <feelings-tracker></feelings-tracker>
    `);
    expect(el).dom.to.equalSnapshot();
  });
});
