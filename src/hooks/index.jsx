import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SVGuitarChord } from 'svguitar';

import { SearchChordsContext } from '@contexts';
import { CHORD_PATTERN } from '@regExp';
import { searchChords } from '@services';
import { LABELS } from '@translations';

export const useSearchChords = () => {
  const { setChords } = useContext(SearchChordsContext);
  const getChords = async (search) => {
    await searchChords(search).then((chords) => {
      setChords(chords);
    });
  };
  return { getChords };
};

export const useSearchChordsFormValidator = (
  formData,
  isDirty,
  setFormCallback = () => null,
) => {
  const chordsPattern = new RegExp(CHORD_PATTERN);
  const [errors, setErrors] = useState({});
  const searchConstant = LABELS.search;
  const searchData = formData[searchConstant];
  const { t } = useTranslation();
  useEffect(() => {
    const err = {};
    if (isDirty && !searchData?.length) {
      err[searchConstant] = t(LABELS.emptySearch);
    }
    if (isDirty && searchData?.length && !chordsPattern.test(searchData)) {
      err[searchConstant] = t(LABELS.wrongChordsPattern);
    }
    err.hasErrors = Object.keys(err).length > 0;
    setErrors(err);
    setFormCallback(err);
  }, [formData]);
  return { errors };
};

export const useSearchChordsDrawChord = (selector, chord = {}) => {
  const { strings: _strings } = { ...chord };
  const hasImg = useRef(false);
  const drawChord = () => {
    const strings = _strings?.split(' ');
    const filter = strings
      ?.map((e) => parseInt(e, 10))
      .filter((e) => !Number.isNaN(e));
    const min = Math.min(...filter);
    const max = Math.max(...filter);
    const chart = new SVGuitarChord(`#${selector}`);
    const drawFr = min > 5 || max > 5;

    if (!hasImg.current && selector) {
      const getPosition = (string) =>
        drawFr ? strings[string] - min + 1 : strings[string];
      try {
        chart
          .chord({
            fingers: [
              [1, getPosition(5)],
              [2, getPosition(4)],
              [3, getPosition(3)],
              [4, getPosition(2)],
              [5, getPosition(1)],
              [6, getPosition(0)],
            ],

            barres: [],
            position: drawFr ? min : 1,
          })
          .draw();
      } catch (e) {
        console.error(LABELS.noDrawChord);
      }
      hasImg.current = true;
    }
  };

  return { drawChord };
};
