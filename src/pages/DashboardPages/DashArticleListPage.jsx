import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, Grid, Button, Dialog, TextField } from "@mui/material";
import { useArticles } from "../../hooks/useArticles";

const DashArticleListPage = () => {
  const navigate = useNavigate();
  const { articles, addArticle, deleteArticle } = useArticles();
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "React",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "React",
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddArticle = () => {
    if (formData.title.trim() && formData.excerpt.trim()) {
      const newArticle = {
        ...formData,
        content: [formData.content || formData.excerpt],
        color: "blue"
      };
      addArticle(newArticle);
      handleCloseDialog();
    }
  };

  const handleDeleteArticle = (articleId) => {
    if (confirm("Are you sure you want to delete this article?")) {
      deleteArticle(articleId);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <div>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Dashboard Articles
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage articles that appear on your public article list.
          </Typography>
        </div>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleOpenDialog}
          sx={{ textTransform: "none", fontSize: "1rem" }}
        >
          + Add New Article
        </Button>
      </Box>

      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} md={6} key={article.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {article.title}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {article.excerpt || (article.content && article.content[0]?.substring(0, 120))}...
                </Typography>

                <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
                  📅 {article.date} • ⏱️ {article.readTime}
                </Typography>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/articles/${article.name || article.id}`)}
                  >
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleDeleteArticle(article.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Article Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Add New Article
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              fullWidth
              size="small"
            />

            <TextField
              label="Excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={2}
              size="small"
            />

            <TextField
              label="Full Content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
              size="small"
            />

            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              select
              SelectProps={{ native: true }}
              fullWidth
              size="small"
            >
              <option value="React">React</option>
              <option value="CSS">CSS</option>
              <option value="Backend">Backend</option>
              <option value="Performance">Performance</option>
              <option value="Git">Git</option>
              <option value="Design">Design</option>
            </TextField>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button 
                variant="contained" 
                color="primary"
                onClick={handleAddArticle}
              >
                Add Article
              </Button>
              <Button 
                variant="outlined"
                onClick={handleCloseDialog}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;