import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { articles } from "../../assets/article-content";

const DashArticleListPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Dashboard Articles
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Articles available from the public Article List page.
      </Typography>

      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} md={6} key={article.name}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {article.title}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {article.content?.[0]?.substring(0, 120)}...
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => navigate(`/articles/${article.name}`)}
                >
                  View Article
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashArticleListPage;