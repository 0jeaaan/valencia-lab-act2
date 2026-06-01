import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Switch,
  Chip,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  getUsers,
  registerUser,
  updateUser,
} from "../../services/UserService";

const roles = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];

const initialFormData = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  role: "viewer",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setServerError("");
    try {
      const data = await getUsers();

      const formattedUsers = data.map((user) => ({
        id: user._id,
        ...user,
      }));

      setUsers(formattedUsers);
    } catch (error) {
      console.error("fetchUsers error:", error);
      if (!error.response) {
        setServerError(
          "Cannot connect to server. Please ensure the API server is running."
        );
      } else if (error.response.status === 403 || error.response.status === 401) {
        setServerError(error.response.data?.message || "Unauthorized to fetch users.");
      } else {
        setServerError(error.response?.data?.message || "Unable to fetch users from database.");
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        user.firstName?.toLowerCase().includes(searchValue) ||
        user.lastName?.toLowerCase().includes(searchValue) ||
        user.email?.toLowerCase().includes(searchValue) ||
        user.username?.toLowerCase().includes(searchValue);

      const matchesRole = roleFilter ? user.role === roleFilter : true;
      const matchesGender = genderFilter ? user.gender === genderFilter : true;

      const matchesStatus =
        statusFilter === ""
          ? true
          : statusFilter === "active"
          ? user.isActive
          : !user.isActive;

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [users, search, roleFilter, genderFilter, statusFilter]);

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setEditingId(null);
    setServerError("");
  };

  const handleOpenAdd = () => {
    resetForm();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleEdit = (row) => {
    setEditingId(row.id);
    setFormData({
      firstName: row.firstName || "",
      lastName: row.lastName || "",
      age: row.age?.toString() || "",
      gender: row.gender || "",
      contactNumber: row.contactNumber || "",
      email: row.email || "",
      role: row.role || "viewer",
      username: row.username || "",
      password: "",
      address: row.address || "",
      isActive: Boolean(row.isActive),
    });
    setErrors({});
    setServerError("");
    setOpen(true);
  };

  const handleToggleStatus = async (id) => {
    try {
      const selectedUser = users.find((user) => user.id === id);

      await updateUser(id, {
        isActive: !selectedUser.isActive,
      });

      await fetchUsers();
    } catch (error) {
      console.log(error);
      setServerError("Unable to update user status.");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.age.toString().trim()) {
      newErrors.age = "Age is required";
    } else if (!/^[0-9]+$/.test(formData.age)) {
      newErrors.age = "Age must be a number only";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^[0-9]{11}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 11 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (/\s/.test(formData.username)) {
      newErrors.username = "Username must not contain spaces";
    }

    if (!editingId && !formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setServerError("");
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (editingId) {
        const updateData = { ...formData };

        if (!updateData.password) {
          delete updateData.password;
        }

        await updateUser(editingId, updateData);
      } else {
        await registerUser(formData);
      }

      await fetchUsers();
      setOpen(false);
      resetForm();
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Unable to save user."
      );
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      renderCell: (params) => params.row.id.slice(-5),
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "username",
      headerName: "Username",
      width: 170,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "age",
      headerName: "Age",
      width: 90,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
    },
    {
      field: "role",
      headerName: "Role",
      width: 130,
    },
    {
      field: "isActive",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Active" : "Inactive"}
          color={params.value ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            size="small"
            color={params.row.isActive ? "error" : "success"}
            onClick={() => handleToggleStatus(params.row.id)}
          >
            {params.row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Users
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Search, filter, add, edit, activate, and disable users.
          </Typography>
        </Box>

        <Button variant="contained" onClick={handleOpenAdd}>
          Add User
        </Button>
      </Stack>

      {serverError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {serverError} {serverError && (
            <Button size="small" onClick={fetchUsers} sx={{ ml: 2 }}>
              Retry
            </Button>
          )}
        </Alert>
      )}

      <Paper sx={{ p: 2, mb: 3, borderRadius: 3, boxShadow: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            fullWidth
            label="Search by name, email, or username"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <TextField
            select
            fullWidth
            label="Role"
            value={roleFilter}
            onChange={(event) => setRoleFilter(event.target.value)}
          >
            <MenuItem value="">All Roles</MenuItem>
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            label="Gender"
            value={genderFilter}
            onChange={(event) => setGenderFilter(event.target.value)}
          >
            <MenuItem value="">All Genders</MenuItem>
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            label="Status"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
        </Stack>
      </Paper>

      <Paper sx={{ height: 470, width: "100%", borderRadius: 3, boxShadow: 3 }}>
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          loading={loading}
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

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{editingId ? "Edit User" : "Add User"}</DialogTitle>

        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {serverError && <Alert severity="error">{serverError}</Alert>}

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />

              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                error={Boolean(errors.age)}
                helperText={errors.age}
              />

              <TextField
                select
                fullWidth
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                error={Boolean(errors.gender)}
                helperText={errors.gender}
              >
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>

            <TextField
              fullWidth
              label="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              error={Boolean(errors.contactNumber)}
              helperText={errors.contactNumber}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={
                editingId
                  ? errors.password ||
                    "Leave blank if you do not want to change password"
                  : errors.password
              }
            />

            <TextField
              fullWidth
              label="Address"
              name="address"
              multiline
              rows={2}
              value={formData.address}
              onChange={handleChange}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />

            <FormControlLabel
              control={
                <Switch
                  checked={formData.isActive}
                  onChange={handleChange}
                  name="isActive"
                />
              }
              label={`Active Status: ${
                formData.isActive ? "Active" : "Inactive"
              }`}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editingId ? "Update User" : "Save User"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersPage;   