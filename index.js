const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// إعداد التطبيق
const app = express();
const port =  9000;

// إعداد CORS للسماح بجميع المصادر (يمكن تخصيصها حسب الحاجة)

const corsOptions = {
  //https://royal-corner.vercel.app
  origin: 'https://quiz-backend-rose.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// اتصال بقاعدة بيانات MongoDB Atlas 
const mongoUri = 'mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Atlas connected');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});

// تعريف نموذج السؤال
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  a: { type: String, required: true },
  b: { type: String, required: true },
  c: { type: String, required: true },
  d: { type: String, required: true },
  correct: { type: String, required: true }
});

const Question = mongoose.model('Question', questionSchema);

// واجهة برمجة التطبيقات (API) لإضافة سؤال
app.post('/questions', async (req, res) => {
  try {
    const { question, a, b, c, d, correct } = req.body;
    const newQuestion = new Question({ question, a, b, c, d, correct });
    await newQuestion.save();
    console.log('Question added successfully:', newQuestion);
    res.json(newQuestion);
  } catch (error) {
    console.error('Error adding question:', error);
    res.status(500).json({ error: error.message });
  }
});

// واجهة برمجة التطبيقات (API) للحصول على الأسئلة
app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// واجهة برمجة التطبيقات (API) لحذف جميع الأسئلة
app.delete('/questions', async (req, res) => {
  try {
    await Question.deleteMany({});
    res.status(200).send('All questions have been deleted.');
  } catch (error) {
    res.status(500).send('An error occurred while deleting questions.');
  }
});

// بدء الخادم
app.listen(port, () => {
  console.log(`Server is running on https://quiz-back-rose.vercel.app:${port}`);
});

app.get('/', (req, res) => {

  res.send('Hello World!');
});
