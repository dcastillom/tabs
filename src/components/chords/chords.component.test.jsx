import noResults from '@services/mocks/withNoResults.json';
import results from '@services/mocks/withResults.json';
import { render, screen } from '@testing-library/react';
import { defaultLng, labels, translations } from '@translations';

import { SearchChordsResults } from './chords.component';

describe('Chords', () => {
  const searchSomething = translations[defaultLng][labels.searchSomething];

  const renderComponent = (mock) =>
    render(<SearchChordsResults chords={mock} />);
  it('search chords', async () => {
    renderComponent({});
    expect(await screen.findAllByText(searchSomething)).toHaveLength(1);
  });
  it('with results', async () => {
    renderComponent(results);
    expect(await screen.findAllByText(results[0].strings)).toHaveLength(1);
  });
  it('with no results', async () => {
    renderComponent(noResults);
    expect(await screen.findAllByText(searchSomething)).toHaveLength(1);
  });
});
