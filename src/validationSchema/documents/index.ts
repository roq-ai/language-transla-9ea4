import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  language: yup.string().required(),
  project_id: yup.string().nullable(),
  translator_id: yup.string().nullable(),
  reviewer_id: yup.string().nullable(),
});
