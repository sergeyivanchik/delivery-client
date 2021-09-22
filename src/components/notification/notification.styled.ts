import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { colors } from '@/assets/styles';

const NotificationStyled = styled(ToastContainer)`
  .Toastify__toast {
    font-family: inherit;
    padding: 16px;
    font-size: 14px;
    line-height: 16px;
    border-radius: 6px;
    color: ${colors.gray900};
    border-left: 6px solid transparent;

    b {
      font-weight: bold;
    }

    &--default {
      color: ${colors.gray900};
    }
    &--info {
      background: ${colors.white};
      border-color: ${colors.gray400};
    }
    &--warning {
      background: ${colors.white};
      border-color: ${colors.yellow500};
    }
    &--error {
      background: ${colors.white};
      border-color: ${colors.red500};
    }
    &--success {
      background: ${colors.white};
      border-color: ${colors.green500};
    }
  }

  .Toastify__close-button {
    position: absolute;
    right: 8px;
    top: 8px;
    color: ${colors.gray500};
    opacity: 0.3;
  }
`;

export { NotificationStyled };
