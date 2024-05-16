import * as React from 'react';
import PropTypes from 'prop-types';
import Profile from '../images/IMG_8112.png'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdViewCompact } from "react-icons/md";
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
// import { useParams } from 'react-router-dom';

function createData(id, FirstName, LastName, Email, Category, Verify, Status) {
  return {
    id,
    FirstName,
    LastName,
    Email,
    Category,
    Verify,
    Status

  };
}

const rows = [
  createData(1, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","Yes", "Approved"),
  createData(2, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","Yes","Approved"),
  createData(3, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","Yes","NotApproved"),
  createData(4, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","Yes","Approved"),
  createData(5, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","Yes","NotApproved"),
  createData(6, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","Yes","Approved"),
  createData(7, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","No","NotApproved"),
  createData(8, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","No","NotApproved"),
  createData(9, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","No","NotApproved"),
  createData(10, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","No","Approved"),
  createData(11, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","No","Approved"),
  createData(12, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","No","NotApproved"),
  createData(13, 'IZERE', "Paradis", "paradis2023@gmail.com", "carnaryArt","No","Approved"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Profile',
    numeric: false,
    disablePadding: true,
    label: 'Profile',
  },
  {
    id: 'FirstName',
    numeric: false,
    disablePadding: true,
    label: 'FirstName',
  },
  {
    id: 'LastName',
    numeric: true,
    disablePadding: false,
    label: 'LastName',
  },
  {
    id: 'Email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'Category',
    numeric: true,
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'Verify',
    numeric: true,
    disablePadding: false,
    label: 'Verify',
  },
  {
    id: 'Status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },

];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Profile
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            {/* <DeleteIcon /> */}
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            {/* <FilterListIcon /> */}
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function More() {
    
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '83.3333%', marginLeft: "24rem", marginTop: "10rem" }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">{<img src={Profile} alt="" className='h-8 w-8 rounded-full'></img>}</TableCell>
                    <TableCell align="right" >{row.FirstName} </TableCell>
                    <TableCell align="right">{row.LastName}</TableCell>
                    <TableCell align="right">{row.Email}</TableCell>
                    <TableCell align="right">{row.Category}</TableCell>
                    <TableCell align="right">{row.Verify}</TableCell>
                    <TableCell align="right">{row.Status}</TableCell>

                    <TableCell align="right" className=' flex flex-roe justify-center items-center space-y-6' >
                      <div className="relative flex justify-center items-center">
                        <button ><MdViewCompact /></button>
                        <span className="absolute mt-6 left-1/2 transform -translate-x-1/2  px-2 py-1  text-green-700 text-sm rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                          View
                        </span>
                      </div>

                      <div className="relative flex items-center">
                        <button ><RiDeleteBinLine />
                        </button>
                        <span className="absolute mt-6 left-1/2 transform -translate-x-1/2  px-2 py-1  text-red-800 text-sm rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                          Delete
                        </span>
                      </div>

                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
     
    </Box>
  );
}