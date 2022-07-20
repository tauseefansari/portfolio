import * as Icons from '@mui/icons-material';

type Props = {
  iconName: keyof typeof Icons;
  className?: string;
};

const DynamicIcon = ({ iconName, className }: Props) => {
  const IconComponent = Icons[iconName];
  return <IconComponent className={className || ''} />;
};

export default DynamicIcon;
