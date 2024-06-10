import express from "express";
import Pool from "./database.js";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcryptjs"
 
const app = express();
const port=3300;




app.use(cors());





app.listen(port,()=>{
  console.log(`Server is now listening at port ${port}`);
});


app.use(bodyParser.json());



app.post('/signup', async (req, res) => {
  
  const { username, email, password } = req.body;

  try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await Pool.query(
          'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
          [username, email, hashedPassword]
      );

      const user = result.rows[0];
      res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
      const result = await Pool.query('SELECT * FROM users WHERE username = $1', [username]);

      if (result.rows.length === 0) {
          return res.status(400).json({ message: 'User not found' });
      }

      const user = result.rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
          return res.status(400).json({ message: 'Invalid password' });
      }

      res.json({ message: 'Login successful', user });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in' });
  }
});

//USER DETAILS//
app.post('/profile', async (req, res) => {
  const { name, email, age, height, weight, gender, designation } = req.body;

  try {
      const result = await Pool.query(
          'INSERT INTO profiles (name, email, age, height, weight, gender, designation) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
          [name, email, age, height, weight, gender, designation]
      );

      const profile = result.rows[0];
      res.status(201).json({ message: 'Profile created successfully', profile });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating profile' });
  }
});

//age factor//
/*app.get('/Age', async (req, res) => {
    try {
      const result = await Pool.query('SELECT age FROM profiles WHERE id = 1'); // Adjust the query as needed
      const age = result.rows[0].age;
      res.json({ age });
    } catch (error) {
      console.error('Error fetching the age:', error);
      res.status(500).json({ error: 'Failed to fetch age' });
    }
  });*/
  
  //strength-tracker//
  app.post('/Stracker', (req, res) => {
    const { squats, benchPress, deadlifts, overheadPress } = req.body;
  
    // Insert the performance data into the Stracker table using pool.query
    const insertQuery = {
      text: 'INSERT INTO Stracker(squats, benchPress, deadlifts, overheadPress) VALUES($1, $2, $3, $4)',
      values: [squats, benchPress, deadlifts, overheadPress],
    };
  
    Pool.query(insertQuery, (err, result) => {
      if (err) {
        console.error("Error inserting data into Stracker table:", err);
        res.status(500).json({ error: 'An error occurred while tracking performance' });
      } else {
        console.log("Performance tracked successfully");
        res.status(200).json({ message: 'Performance tracked successfully' });
      }
    });
  });

  //get function for checking user performance 'finalwg'//
  app.get('/Stracker', (req, res) => {
    // Select all performance data from the Stracker table using pool.query
    const selectQuery = {
      text: 'SELECT squats, benchpress, deadlifts, overheadpress FROM Stracker',
    };
  
    Pool.query(selectQuery, (err, result) => {
      if (err) {
        console.error("Error retrieving data from Stracker table:", err);
        res.status(500).json({ error: 'An error occurred while retrieving performance data' });
      } else {
        // Extract performance data from the query result
        const performanceData = result.rows.map(row => ({
          squats: row.squats,
          benchPress: row.benchpress,
          deadlifts: row.deadlifts,
          overheadPress: row.overheadpress
        }));
        console.log("Performance data retrieved successfully:", performanceData);
        res.status(200).json({ performanceData });
      }
    });
});


// Route to handle the POST request for Cardio Tracker
app.post('/Ctracker', (req, res) => {
  const { pushups, pullups, stepsCount, jumpingJacks } = req.body;

  const insertQuery = {
    text: 'INSERT INTO Ctracker(pushups, pullups, stepscount, jumpingjacks) VALUES($1, $2, $3, $4)',
    values: [pushups, pullups, stepsCount, jumpingJacks],
  };

  Pool.query(insertQuery, (err, result) => {
    if (err) {
      console.error("Error inserting data into Ctracker table:", err);
      res.status(500).json({ error: 'An error occurred while tracking performance' });
    } else {
      console.log("Performance tracked successfully");
      res.status(200).json({ message: 'Performance tracked successfully' });
    }
  });
});
  
//get method for ctracker//

app.get('/Ctracker', (req, res) => {
  // Select all performance data from the Ctracker table using pool.query
  const selectQuery = {
    text: 'SELECT pushups, pullups, stepsCount, jumpingJacks FROM Ctracker',
  };

  Pool.query(selectQuery, (err, result) => {
    if (err) {
      console.error("Error retrieving data from Ctracker table:", err);
      res.status(500).json({ error: 'An error occurred while retrieving performance data' });
    } else {
      // Extract performance data from the query result
      const performanceData = result.rows.map(row => ({
        pushups: row.pushups,
        pullups: row.pullups,
        stepsCount: row.stepscount,
        jumpingJacks: row.jumpingjacks
      }));
      console.log("Performance data retrieved successfully:", performanceData);
      res.status(200).json({ performanceData });
    }
  });
});

//delete for change plan for weight gain//
app.delete('/Stracker', (req, res) => {
  const deleteQuery = 'DELETE FROM Stracker';

  Pool.query(deleteQuery, (err, result) => {
    if (err) {
      console.error('Error deleting Stracker table content:', err);
      return res.status(500).json({ error: 'Failed to delete Stracker table content' });
    }

    res.status(200).json({ message: 'Stracker table content deleted successfully' });
  });
});

//delete for new user for weight gain and weight loss//
app.delete('/profile',(req,res)=>{
  const deleteQuery = 'DELETE FROM profiles';

  Pool.query(deleteQuery, (err, result) => {
    if (err) {
      console.error('Error deleting Stracker table content:', err);
      return res.status(500).json({ error: 'Failed to delete Stracker table content' });
    }

    res.status(200).json({ message: 'Stracker table content deleted successfully' });
  });
});

//delete for change plan for weight loss//
app.delete('/Ctracker', (req, res) => {
  const deleteQuery = 'DELETE FROM Ctracker';

  Pool.query(deleteQuery, (err, result) => {
    if (err) {
      console.error('Error deleting Ctracker table content:', err);
      return res.status(500).json({ error: 'Failed to delete Ctracker table content' });
    }

    res.status(200).json({ message: 'Ctracker table content deleted successfully' });
  });
});




