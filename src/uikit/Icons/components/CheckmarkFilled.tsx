import { Icon, IconProps } from "../Icon";

const CheckmarkFilled = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM14 21.5L9 16.5L10.6 15L14 18.4L21.4 11L23 12.6L14 21.5Z"
      fill="currentColor"
    />
  </Icon>
);

export default CheckmarkFilled;
