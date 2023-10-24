import React, { useMemo, useRef, useState } from 'react';

import { SearchChordsHeader, SearchChordsResults, LngSelector } from '@components';
import { SearchChordsContext } from '@contexts';

function App() {
  const searchChordsIsDirty = useRef(false);
  const [chords, setChords] = useState([]);
  const [visible, setVisible] = useState(true);

  const value = useMemo(
    () => ({
      searchChordsIsDirty,
      setChords,
      setVisible,
    }),
    [chords, visible],
  );

  return (
    <div>
      {visible && (
        <SearchChordsContext.Provider value={value}>
          <LngSelector />
          <SearchChordsHeader />
          <SearchChordsResults chords={chords} />
        </SearchChordsContext.Provider>
      )}
    </div>
  );
}

export default App;
