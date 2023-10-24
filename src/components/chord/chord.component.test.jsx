import { render, screen } from '@testing-library/react';

import { Chord } from './chord.component';
import mock from './chord.mock.json';
import { setChordName } from './chord.utils';

import styles from './chord.module.css';

describe('Chord', () => {
  it('renders', async () => {
    const { container } = render(<Chord chord={mock} />);
    const { chordName, strings } = mock;
    expect(await screen.findAllByText(setChordName(chordName))).toHaveLength(1);
    expect(await screen.findAllByText(strings)).toHaveLength(1);
    expect(container.getElementsByClassName(styles.img).length).toBe(1);
  });
});
