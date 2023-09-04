import { styled } from '@mui/material/styles';
import Textfield, { TextFieldProps } from '@mui/material/TextField';

const FieldInput = styled(Textfield)<TextFieldProps>(() => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    marginTop: 4,
    height: 38,
    borderRadius: 2,
  },
  '& .MuiOutlinedInput-input::placeholder': {
    fontStyle: 'italic',
    fontSize: 14,
  },
  '& .MuiFormHelperText-root': {
    marginTop: 0,
  },
  '& .MuiInputBase-input': {
    padding: '6px 14px',
  },
}));

export default function TextField(props: TextFieldProps) {
  return <FieldInput {...props} />;
}
