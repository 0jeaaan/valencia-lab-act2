import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

const monthlyData = [
  { month: "Jan", users: 30, reports: 10 },
  { month: "Feb", users: 45, reports: 18 },
  { month: "Mar", users: 60, reports: 25 },
  { month: "Apr", users: 80, reports: 32 },
  { month: "May", users: 100, reports: 40 },
];

const pieData = [
  { id: 0, value: 35, label: "Desktop" },
  { id: 1, value: 45, label: "Mobile" },
  { id: 2, value: 20, label: "Tablet" },
];

const ReportsPage = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Reports
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Charts and data visualization using MUI X Charts.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Users per Month
              </Typography>

              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: monthlyData.map((item) => item.month),
                  },
                ]}
                series={[
                  {
                    data: monthlyData.map((item) => item.users),
                    label: "Users",
                  },
                ]}
                height={300}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Reports Growth
              </Typography>

              <LineChart
                xAxis={[
                  {
                    scaleType: "point",
                    data: monthlyData.map((item) => item.month),
                  },
                ]}
                series={[
                  {
                    data: monthlyData.map((item) => item.reports),
                    label: "Reports",
                  },
                ]}
                height={300}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Device Usage
              </Typography>

              <PieChart
                series={[
                  {
                    data: pieData,
                  },
                ]}
                height={300}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;