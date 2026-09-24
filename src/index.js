const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    message: '🚀 Express server is running!',
    endpoints: ['/', '/health', '/api/users', '/api/echo'],
  });
});

app.get('/test', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString(),message:'test message' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});


app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' },
  ]);
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.originalUrl });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});