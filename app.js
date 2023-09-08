const express = require('express');
const app = express();
const port = process.env.PORT || 3002;


app.use(express.json());


const FULL_NAME = 'john_doe';
const DOB = '17091999';


function generateUserId() {
  return `${FULL_NAME}_${DOB}`;
}

app.post('/bfhl', (req, res) => {

  const { full_name, dob, college_email, college_roll, numbers, alphabets } = req.body;

  if (!full_name || !dob || !college_email || !college_roll || !numbers || !alphabets) {
    return res.status(400).json({ is_success: false, message: 'Invalid input data' });
  }

  const highestAlphabet = alphabets.reduce((max, current) => {
    return max < current ? current : max;
  }, 'A');

  const user_id = generateUserId();

  res.json({
    user_id,
    is_success: true,
    status: 'Success',
    college_email,
    college_roll,
    numbers,
    alphabets,
    highestAlphabet,
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
