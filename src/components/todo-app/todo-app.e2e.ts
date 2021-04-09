import { newE2EPage } from '@stencil/core/testing';

describe('todo-app', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('todo-app');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('todo-app >>> h1');
    expect(element.textContent).toEqual('My Tasks');
  });
});
