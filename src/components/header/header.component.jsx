import { useState } from 'react';

import { Form, Input, Logo } from '@components';
import { useSearchChords, useSearchChordsFormValidator } from '@hooks';
import { labels } from '@translations';

import styles from './header.module.css';

export function SearchChordsHeader() {
  const { search: searchId } = labels;
  const { getChords } = useSearchChords();
  const [searchErrors, setSearchErrors] = useState({});

  const handleSubmit = ({ search }) => {
    getChords(search);
  };

  const handleChange = ({ search }) => {
    console.log(search);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Form
        id={searchId}
        className={styles.searchForm}
        onChange={(event) => handleChange(event)}
        onSubmit={(event) => handleSubmit(event)}
        setErrorsCallback={setSearchErrors}
        validator={useSearchChordsFormValidator}
      >
        <Input
          type="text"
          name={searchId}
          error={searchErrors[searchId]}
          label={false}
        />
      </Form>
    </header>
  );
}
