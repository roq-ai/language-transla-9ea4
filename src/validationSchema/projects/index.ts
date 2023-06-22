import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable(),
  project_manager_id: yup.string().nullable(),
});
