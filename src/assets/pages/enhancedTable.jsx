import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { CgProfile } from "react-icons/cg";
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
import { GoSearch } from "react-icons/go";
import { visuallyHidden } from '@mui/utils';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './context';

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
    id: 'profile',
    numeric: true,
    disablePadding: true,
    label: 'Profile',
  },
  {
    id: 'firstName',
    numeric: true,
    disablePadding: true,
    label: 'First Name',
  },
  {
    id: 'lastName',
    numeric: true,
    disablePadding: false,
    label: 'Last Name',
  },
  {
    id: 'category',
    numeric: true,
    disablePadding: false,
    label: 'Category',
  },
];

function EnhancedTableHead(props) {
  const { numSelected, order, orderBy, onRequestSort, onSelectAllClick, rowCount } = props;
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
              'aria-label': 'select all users',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className='font-bold text-xl'
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
          {"All User's Records"}
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

export default function EnhancedTable() {
  const [rowsData, setRowsData] = useState([]);
  const { mode } = useContext(AppContext);
  let [filt, setFilt] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);

  const handleProfile = () => {
    axios.get("https://huza-backend-app-api-1.onrender.com/api/profile/allProfile")
      .then((res) => {
        setRowsData(res.data.profile);
        setFilt(res.data.profile);
        console.log(res.data.profile);
      }).catch((err) => {
        setRowsData([]);
        setFilt([]);
        console.log(err);
      });
  }

  useEffect(() => {
    handleProfile();
  }, []);

  const deleteProfile = (id) => {
    axios.delete("https://huza-backend-app-api-1.onrender.com/api/profile/delete/" + id)
      .then((resp) => {
        console.log(resp.data.profile);
        handleProfile(); // To refresh the contacts list
        setDeleteMessage('Successfully deleted');
        setIsDeleteSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setDeleteMessage('Failed to delete');
        setIsDeleteSuccess(false);
      });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    if (value === "" || value === undefined) {
      setFilt(rowsData);
    } else {
      const filtered = rowsData.filter((user) => user.category.includes(value));
      setFilt(filtered);
      setPage(0); // Reset to first page when filter is applied
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filt.map((n) => n.id);
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

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filt.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(filt, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, filt],
  );

  return (
    <Box sx={{ width: '83.3333%', height: "100%", marginTop: "10rem" }} >
      <div className='flex flex-col justify-center items-end'>
        <div className='flex flex-row pr-2 mb-4 bg-white rounded-full pl-2 justify-center items-center'>
          <GoSearch className="text-black" />
          <select className='space-y-4 px-6 py-4 rounded-full' onChange={handleFilter}>
            <option value="">Find By Category</option>
            <option value="CalinaryArt">Culinary Art</option>
            <option value="Braiding">Braiding</option>
            <option value="Plaint">Paint</option>
            <option value="MakeupDesign">MakeUp Design</option>
          </select>
        </div>
      </div>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        {deleteMessage && (
          <Typography
            variant="subtitle1"
            color={isDeleteSuccess ? 'green' : 'red'}
            align="center"
            gutterBottom
          >
            {deleteMessage}
          </Typography>
        )}
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
              rowCount={filt.length}
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
                    <TableCell align="right"><img src={row.photo} className='h-8 w-8 rounded-full'></img></TableCell>
                    <TableCell align="left">{row.firstName}</TableCell>
                    <TableCell align="left">{row.lastName}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="right" >
                      <div className=' w-full h-10 flex flex-row justify-around items-center'>
                        <div className="relative">
                          <NavLink to={`/dashboard/enhancedTable/adminMore/${row.user}`}><button><MdViewCompact className='bg-blue-900 text-2xl text-slate-300' /></button></NavLink>
                          <span className="absolute mt-6 left-1/2 transform -translate-x-1/2 px-2 py-1 text-green-700 text-sm rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                            View
                          </span>
                        </div>
                        <div className="relative">
                          <button onClick={() => deleteProfile(row._id)}><RiDeleteBinLine className='text-2xl' /></button>
                          <span className="absolute mt-6 left-1/2 transform -translate-x-1/2 px-2 py-1 text-red-800 text-sm rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Delete
                          </span>
                        </div>
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
          count={filt.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
        className={!mode ? "text-white" : "text-black"}
      />
    </Box>
  );
}