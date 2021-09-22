import 'react-toastify/dist/ReactToastify.css';

import { NotificationStyled } from './notification.styled';

const Notification = () => {
  return <NotificationStyled position="bottom-right" autoClose={3000} hideProgressBar />;
};

export { Notification };
