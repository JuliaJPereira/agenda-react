import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const DAYS_OF_WEEK = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const useStyle = makeStyles({
  root: {
    height: '100%',
  },
  table: {
    minHeight: '100%',
  },
  '& td ~ td, & th ~ th': {
    borderRight: '1px solid rgb(224, 224, 224)',
  },
});

export function CalendarScreen() {
  const classes = useStyle();
  return (
    <TableContainer className={classes.root} component={'div'}>
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
  );
}
