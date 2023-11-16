import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SVGuitarChord } from 'svguitar';

import { SearchChordsContext } from '@contexts';
import { CHORD_PATTERN } from '@regExp';
import { searchChords } from '@services';
import { labels, lng } from '@translations';

export const useSearchChords = () => {
  const { setChords, searchChordsIsDirty } = useContext(SearchChordsContext);
  const getChords = async (search) => {
    await searchChords(search).then((chords) => {
      searchChordsIsDirty.current = true;
      setChords(chords);
    });
  };
  return { getChords };
};

export const useResetApp = () => {
  const { setChords, setVisible, searchChordsIsDirty } =
    useContext(SearchChordsContext);
  const resetApp = () => {
    searchChordsIsDirty.current = false;
    setChords([]);
    setVisible(false);
    setTimeout(() => setVisible(true), 0);
  };
  return { resetApp };
};

export const useChangeLng = () => {
  const { i18n } = useTranslation();
  const { resetApp } = useResetApp();
  const changeLng = (_lng) => {
    localStorage.setItem(lng, _lng);
    i18n.changeLanguage(_lng);
    resetApp();
  };
  const currentLng = i18n.language;
  return { changeLng, currentLng };
};

export const useSearchChordsFormValidator = (
  formData,
  isDirty,
  setFormCallback = () => null,
) => {
  const chordsPattern = new RegExp(CHORD_PATTERN);
  const [errors, setErrors] = useState({});
  const searchConstant = labels.search;
  const searchData = formData[searchConstant];
  const { t } = useTranslation();
  useEffect(() => {
    const err = {};
    if (isDirty && !searchData?.length) {
      err[searchConstant] = t(labels.emptySearch);
    }
    if (isDirty && searchData?.length && !chordsPattern.test(searchData)) {
      err[searchConstant] = t(labels.wrongChordsPattern);
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
        console.error(labels.noDrawChord);
      }
      hasImg.current = true;
    }
  };

  return { drawChord };
};
