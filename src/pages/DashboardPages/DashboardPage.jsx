import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import {
  People,
  Assessment,
  TrendingUp,
  CheckCircle,
} from "@mui/icons-material";

const stats = [
  {
    title: "Total Users",
    value: "120",
    icon: <People />,
    color: "#2563EB",
  },
  {
    title: "Total Reports",
    value: "45",
    icon: <Assessment />,
    color: "#9333EA",
  },
  {
    title: "Growth Rate",
    value: "78%",
    icon: <TrendingUp />,
    color: "#F59E0B",
  },
  {
    title: "Active Users",
    value: "89",
    icon: <CheckCircle />,
    color: "#10B981",
  },
];

const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Dashboard Overview
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Summary of users, reports, growth, and active accounts.
      </Typography>

      <Grid container spacing={3}>
        {stats.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%" }}>
              <CardContent>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    backgroundColor: item.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Lab Activity 6 Dashboard
          </Typography>

          <Typography color="text.secondary">
            This dashboard serves as the overview page for Lab Activity 6. The
            Reports page includes printable reports, while the Users page
            includes search, filter, and form validation features.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;