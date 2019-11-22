import React, {ReactElement, useState} from 'react';
import {FormGroup, FormControlLabel, Checkbox, Paper, TextField, makeStyles, Theme, createStyles, MenuItem} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    menu: {
      width: 200,
    },
  }),
);

const currencies = [
  {
    value: 'USD',
    label: 'SV全員',
  },
  {
    value: 'EUR',
    label: '山田',
  },
  {
    value: 'BTC',
    label: '中田',
  },
  {
    value: 'JPY',
    label: '田村',
  },
];

const AdminCheckSearch: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [currency, setCurrency] = useState('USD');
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  })
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  return (
    <Paper>
    <div>
      <TextField
        disabled
        id="district"
        label="ディストリクト"
        defaultValue="◯○ディストリクト"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        disabled
        id="filled-disabled"
        label="営業所"
        defaultValue="◯○営業所"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="standard-select-currency"
        select
        label="SV"
        className={classes.textField}
        value={currency}
        onChange={handleChangeSelect}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="対象のSVを選択してください"
        margin="normal"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="国名"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />
        }
        label="和名"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedC} onChange={handleChange('checkedC')} value="checkedC" />
        }
        label="首都"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedD} onChange={handleChange('checkedD')} value="checkedD" />
        }
        label="国旗"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedE} onChange={handleChange('checkedE')} value="checkedE" />
        }
        label="住民の呼称"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedF} onChange={handleChange('checkedF')} value="checkedF" />
        }
        label="国名コード2桁"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedG} onChange={handleChange('checkedG')} value="checkedG" />
        }
        label="領域/区域"
      />
    </FormGroup>
    </Paper>
  )
}

export default AdminCheckSearch
