import { Avatar } from '../../ui/avatar';

type Props = {
  imageUrl?: string | null;
};

export const Account = ({ imageUrl }: Props) => {
  return <Avatar imageUrl={imageUrl} />;
};
