import React, { useCallback } from 'react';
import i18next from 'i18next';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';

import { FIELDS } from './constants';
import styles from './styles.module.scss';

function RegistrationContainer() {
  const handleSubmit = useCallback((event: React.FormEvent<Element>) => {
    event.preventDefault();
    // TODO: Implement
  }, []);

  const handleInputChange = useCallback((event: React.FormEvent<Element>) => {
    event.preventDefault();
    // TODO: Implement method
  }, []);

  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Registration:registration')}</h1>
        <h2>{i18next.t('Registration:registrationExplanation')}</h2>
      </div>
      <div className={`row space-between m-bottom-2 full-width ${styles.sectionContainer}`}>
        <FormInput
          className="full-width"
          label={i18next.t('Registration:name')}
          name={FIELDS.name}
          inputType="text"
          inputClassName={`m-right-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:namePlaceholder') as string}
          onChange={handleInputChange}
        />
        <FormInput
          className="full-width"
          label={i18next.t('Registration:surname')}
          name={FIELDS.surname}
          inputType="text"
          inputClassName={`m-left-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:surnamePlaceholder') as string}
          onChange={handleInputChange}
        />
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <FormInput
          className="full-width"
          label={i18next.t('Registration:email')}
          name={FIELDS.email}
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:emailPlaceholder') as string}
          onChange={handleInputChange}
        />
      </div>
      <div className={`row space-between m-bottom-2 full-width ${styles.sectionContainer}`}>
        <FormInput
          className="full-width"
          label={i18next.t('Registration:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`m-right-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:passwordPlaceholder') as string}
          onChange={handleInputChange}
        />
        <FormInput
          className="full-width"
          label={i18next.t('Registration:confirmPassword')}
          name={FIELDS.confirmPassword}
          inputType="password"
          inputClassName={`m-left-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:confirmPasswordPlaceholder') as string}
          onChange={handleInputChange}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {i18next.t('RecoverPassword:enter')}
        </button>
        <a href={PATHS.login}>{i18next.t('RecoverPassword:returnToLogin')}</a>
      </div>
    </form>
  );
}

export default RegistrationContainer;
