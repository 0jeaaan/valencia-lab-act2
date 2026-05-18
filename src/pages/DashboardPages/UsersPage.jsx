import { Box, Typography, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Valencia",
    age: 21,
    email: "jean@example.com",
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Santos",
    age: 22,
    email: "maria@example.com",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Dela Cruz",
    age: 23,
    email: "john@example.com",
  },
  {
    id: 4,
    firstName: "Angela",
    lastName: "Reyes",
    age: 20,
    email: "angela@example.com",
  },
  {
    id: 5,
    firstName: "Mark",
    lastName: "Garcia",
    age: 24,
    email: "mark@example.com",
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 160,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 160,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 220,
    sortable: false,
    valueGetter: (value, row) => `${row.firstName} ${row.lastName}`,
  },
];

const UsersPage = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Users
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        User list table using MUI Data Grid.
      </Typography>

      <Paper sx={{ height: 430, width: "100%", borderRadius: 3, boxShadow: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
};

export default UsersPage;