import { FC } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Input } from '@components/Input';
import { Dropdown } from '@components/Dropdown';
import { DropdownItem } from '@components/Dropdown/types';
import { Button } from '@components/Button';
import classNames from 'classnames';
import { TextArea } from '@components/TextArea';
import { Checkbox } from '@components/Checkbox';

const TRIP_ITEM_LIST: DropdownItem[] = [
  { id: 1, value: 'trip1', title: 'Trip 1' },
  { id: 2, value: 'trip2', title: 'Trip 2' },
];

interface FeedbackTypeItem {
  id: number;
  value: string;
  title: string;
}

const FEEDBACK_TYPE_LIST: FeedbackTypeItem[] = [
  { id: 1, title: 'Reviews and suggestions', value: 'ReviewsAndSuggestions' },
  { id: 2, title: 'Question about content', value: 'QuestionAboutContent' },
  { id: 3, title: 'Complaints', value: 'Complaints' },
  { id: 4, title: 'Other', value: 'Other' },
];

interface InitialState {
  name: string;
  email: string;
  phone: string;
  trip: string;
  question: string;
  feedbackType: string;
  accept: '' | 'yes';
}

const INITIAL_VALUES: InitialState = {
  name: '',
  email: '',
  phone: '',
  trip: '',
  question: '',
  feedbackType: 'ReviewsAndSuggestions',
  accept: '',
};

const validationSchema = yup.object({
  name: yup.string().required('Must not be empty!'),
  email: yup.string().email('Must be email!').required('Must not be empty!'),
  phone: yup.string().required('Must not be empty!'),
  trip: yup.string().required('Must not be empty!'),
  question: yup.string().required('Must not be empty!'),
  accept: yup.string().required('Must be checked!'),
});

interface FeedbackFormProps {
  onClose: () => void;
}

export const FeedbackForm: FC<FeedbackFormProps> = ({ onClose }) => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert('FORM_DATA: ' + JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      className={'feedback-form__wrap'}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete={'off'}
        className={'feedback-form__form'}
      >
        <div className={'feedback-form__top-wrap'}>
          <span className={'app__font title'}>Feedback</span>{' '}
          <button className={'feedback-form__close-button'} onClick={onClose} />
        </div>

        <div className={'feedback-form__form-top'}>
          <div className={'feedback-form__form-field-wrap'}>
            <label className={'app__font text'}>Your name</label>
            <Input
              type="text"
              placeholder={'please input name'}
              {...formik.getFieldProps('name')}
            />
            {Boolean(formik.touched.name) && Boolean(formik.errors.name) && (
              <div
                className={classNames(
                  'feedback-form__form-field-error-msg',
                  'app__font text',
                )}
              >
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className={'feedback-form__form-field-wrap'}>
            <label className={'app__font text'}>Email address</label>
            <Input
              type="text"
              placeholder={'please input email'}
              {...formik.getFieldProps('email')}
            />
            {Boolean(formik.touched.email) && Boolean(formik.errors.email) && (
              <div
                className={classNames(
                  'feedback-form__form-field-error-msg',
                  'app__font text',
                )}
              >
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className={'feedback-form__form-field-wrap'}>
            <label className={'app__font text'}>Your phone</label>
            <Input
              type="text"
              placeholder={'please input phone'}
              {...formik.getFieldProps('phone')}
            />
            {Boolean(formik.touched.phone) && Boolean(formik.errors.phone) && (
              <div
                className={classNames(
                  'feedback-form__form-field-error-msg',
                  'app__font text',
                )}
              >
                {formik.errors.phone}
              </div>
            )}
          </div>

          <div className={'feedback-form__form-field-wrap'}>
            <label className={'app__font text'}>Сhoose a trip</label>
            <Dropdown
              itemList={TRIP_ITEM_LIST}
              placeholder={'Сhoose'}
              {...formik.getFieldProps('trip')}
              onChange={(value) => formik.setFieldValue('trip', value)}
            />
            {Boolean(formik.touched.trip) && Boolean(formik.errors.trip) && (
              <div
                className={classNames(
                  'feedback-form__form-field-error-msg',
                  'app__font text',
                )}
              >
                {formik.errors.trip}
              </div>
            )}
          </div>
        </div>

        <div className={'feedback-form__feedback-type-wrap'}>
          {FEEDBACK_TYPE_LIST.map((feedbackItem) => (
            <Button
              key={feedbackItem.id}
              className={classNames(
                'feedback-form__feedback-type',
                formik.getFieldProps('feedbackType').value !==
                  feedbackItem.value && 'is-not-selected',
              )}
              type={'button'}
              onClick={() =>
                formik.setFieldValue('feedbackType', feedbackItem.value)
              }
            >
              {feedbackItem.title}
            </Button>
          ))}
        </div>

        <div className={'feedback-form__form-field-wrap'}>
          <label className={'app__font text'}>Question</label>
          <TextArea
            placeholder={'please input Question'}
            rows={8}
            {...formik.getFieldProps('question')}
          />
          {Boolean(formik.touched.question) &&
            Boolean(formik.errors.question) && (
              <div
                className={classNames(
                  'feedback-form__form-field-error-msg',
                  'app__font text',
                )}
              >
                {formik.errors.question}
              </div>
            )}
        </div>

        <div className={'feedback-form__bottom-block'}>
          <div className={'feedback-form__form-field-wrap'}>
            <div className={'feedback-form__form-field-wrap is-row'}>
              <Checkbox
                {...formik.getFieldProps('accept')}
                onChange={(e) =>
                  formik.setFieldValue('accept', e.target.checked ? 'yes' : '')
                }
                checked={formik.getFieldProps('accept').value === 'yes'}
              />
              <div className={'app__font text'}>Даю согласие на обработку</div>
            </div>
            {Boolean(formik.touched.accept) &&
              Boolean(formik.errors.accept) && (
                <div
                  className={classNames(
                    'feedback-form__form-field-error-msg',
                    'app__font text',
                  )}
                >
                  {formik.errors.accept}
                </div>
              )}
          </div>
          <Button type={'submit'} className={'feedback-form__submit-button'}>
            send
          </Button>
        </div>
      </form>
    </div>
  );
};
