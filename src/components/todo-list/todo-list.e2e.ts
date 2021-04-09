import { newE2EPage } from '@stencil/core/testing';

describe('todo-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-list></todo-list>');

    const element = await page.find('todo-list');
    expect(element).toHaveClass('hydrated');
  });

  it('contains an "Edit" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-list></todo-list>');

    const element = await page.find('todo-list >>> button');
    expect(element.textContent).toEqual('Edit');
  });
});
