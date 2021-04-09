import { newE2EPage } from '@stencil/core/testing';

describe('todo-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-detail></todo-detail>');

    const element = await page.find('todo-detail');
    expect(element).toHaveClass('hydrated');
  });

  it('contains expected text', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-detail></todo-detail>');

    const element = await page.find('todo-detail >>> div >>> p');
  });
});
