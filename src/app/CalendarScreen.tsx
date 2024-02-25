import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';

const DAYS_OF_WEEK = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const useStyle = makeStyles({
  table: {
    borderTop: '1px solid rgb(224, 224, 224)',
    minHeight: '100%',
    '& td ~ td, & th ~ th': {
      borderRight: '1px solid rgb(224, 224, 224)',
    },
  },
});

export function CalendarScreen() {
  const classes = useStyle();
  return (
    <Box style={{ display: 'flex', height: '100%', alignItems: 'stretch' }}>
      <Box
        style={{
          borderRight: '1px solid rgb(224, 224, 224)',
          width: '16em',
          padding: '8px 16px',
        }}
      >
        <h2>Agenda React</h2>
        <Button variant="contained" color="primary">
          Novo evento
        </Button>
        <Box style={{ marginTop: '64px' }}>
          <h3>Agendas</h3>
          <FormControlLabel control={<Checkbox />} label="Pessoal" />
          <FormControlLabel control={<Checkbox />} label="Trabalho" />
        </Box>
      </Box>
      <TableContainer component={'div'}>
        <Box
          style={{ display: 'flex', alignItems: 'center', padding: '8px 16px' }}
        >
          <Box>
            <IconButton aria-label="Mês anterior">
              <Icon>chevron_left</Icon>
            </IconButton>
            <IconButton aria-label="Próximo mês">
              <Icon>chevron_right</Icon>
            </IconButton>
          </Box>
          <Box style={{ flex: '1', marginLeft: '16px' }} component="h3">
            Junho de 2021
          </Box>
          <IconButton aria-label="Usuário">
            <Avatar>
              <Icon>person</Icon>
            </Avatar>
          </IconButton>
        </Box>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {DAYS_OF_WEEK.map(day => (
                <TableCell
                  style={{ borderRight: '1px solid rgb(224, 224, 224)' }}
                  align="center"
                  key={day}
                >
                  {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {DAYS_OF_WEEK.map(day => (
                <TableCell
                  style={{ borderRight: '1px solid rgb(224, 224, 224)' }}
                  align="center"
                  key={day}
                >
                  X
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {DAYS_OF_WEEK.map(day => (
                <TableCell
                  style={{ borderRight: '1px solid rgb(224, 224, 224)' }}
                  align="center"
                  key={day}
                >
                  X
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {DAYS_OF_WEEK.map(day => (
                <TableCell
                  style={{ borderRight: '1px solid rgb(224, 224, 224)' }}
                  align="center"
                  key={day}
                >
                  X
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
