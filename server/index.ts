import express from 'express';
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('client/dist'));

// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
