import { useRef } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Print } from "@mui/icons-material";
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
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;

    if (!printContent) return;

    const printWindow = window.open("", "_blank", "width=1200,height=800");

    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Reports Summary</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 30px;
              color: #111827;
            }

            h1 {
              margin-bottom: 5px;
            }

            p {
              color: #4b5563;
            }

            .report-content {
              margin-top: 20px;
            }

            @media print {
              button {
                display: none;
              }
            }
          </style>
        </head>

        <body>
          <h1>Reports Summary</h1>
          <p>Printable report generated from the Reports page.</p>
          <div class="report-content">
            ${printContent.innerHTML}
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Reports
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Charts and data visualization using MUI X Charts.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Print />}
          onClick={handlePrint}
        >
          Print PDF
        </Button>
      </Stack>

      <Box ref={printRef}>
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
    </Box>
  );
};

export default ReportsPage;