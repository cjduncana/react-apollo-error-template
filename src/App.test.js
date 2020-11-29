import { MockedProvider } from '@apollo/client/testing'
import TestRenderer from 'react-test-renderer'

import App, { ALL_PEOPLE } from './App'

it('should render component', async () => {
  const mock = {
    request: { query: ALL_PEOPLE },
    result: {
      data: { people: [{ id: 1, name: 'John Doe' }] },
    },
  };

  const component = TestRenderer.create(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  await TestRenderer.act(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, 0)
    })
  })

  const p = component.root.findByType('li');
  expect(p.props.children).toEqual('John Doe');
});