import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { IErrorResp } from '@/api/api.types';

const showRespErrors = ({ response, message }: Error & AxiosError<IErrorResp>) => {
  const errorsWithDetail = response?.data?.errors?.filter(({ detail }) => !!detail);
  const errorsWithTitle = response?.data?.errors?.filter(({ title }) => !!title);
  const errorWithMessage = response?.data?.message;

  if (!!errorsWithDetail?.length) {
    errorsWithDetail.forEach(({ detail }) => detail && toast.error(detail, { toastId: detail }));
  } else if (!!errorsWithTitle?.length) {
    errorsWithTitle.forEach(({ title }) => title && toast.error(title, { toastId: title }));
  } else if (!!errorWithMessage) {
    toast.error(errorWithMessage, { toastId: errorWithMessage });
  } else {
    message && toast.error(message, { toastId: message });
  }
};

const errorHandler = (error: Error & AxiosError<IErrorResp>) => {
  switch (error?.response?.status) {
    case 401: {
      break;
    }
  }

  showRespErrors(error);

  return Promise.reject(error);
};

export { errorHandler };
