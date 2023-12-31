import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { labels } from '@translations';

export function Form(props) {
  const {
    id,
    children,
    className,
    title,
    onChange,
    onSubmit,
    setErrorsCallback,
    validator,
  } = props;
  const ref = useRef(false);
  const isDirty = useRef(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const { errors } = validator(formData, isDirty?.current, setErrorsCallback);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };
  const handleChange = () => {
    isDirty.current = true;
    const data = {};
    for (const pair of [...new FormData(ref.current)]) {
      data[pair[0]] = pair[1];
    }
    setFormData(data);
    onChange(data);
  };

  return (
    <>
      {title && <h2>{title}</h2>}
      <form
        id={id}
        ref={ref}
        className={className}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        {children}
        <input
          type="submit"
          value={t(labels.submit)}
          disabled={errors.hasErrors}
        />
      </form>
    </>
  );
}
