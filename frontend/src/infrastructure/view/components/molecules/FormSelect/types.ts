import { LabelProps } from '../../atoms/Label/types';

export interface FormSelectProps extends LabelProps {
  name: string;
  id?: string;
  onChange?: (event: any) => void;
  onBlur?: () => void;
  optionsList: string[];
  disabled?: disableType;

}
export type disableType = true | false;
