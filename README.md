
# Full-Stack basic To Do Application

## Project Setup

This little project involves setting up a full-stack application with a PERN Stack ( PostgreSQL on database, Express js for backend API, React js frontendn, in Node js envirorment.)

### 🚀 Running the Project
*** DATA BASE SETUP *** 
#### 1. 🧱 Create Your PostgreSQL Database
i/  Open your PostgreSQL client (like pgAdmin or terminal).
ii/ Create a new database (e.g., `tasks_db`).

#### 2. 🗃️ Set Up the `tasks` Table
- Inside the `/database` folder, there’s an SQL file with the query to create the `tasks` table.
- Run that query in your PostgreSQL database to initialize the table structure.
*** BACKEND  ***
#### 3. 🔐 Configure Environment Variables
- Create a `.env` file at the root of your server folder.
- Use the `.env.template` as a base.
- Fill in your DB name, user, password, port, etc.

#### 4. 📦 Install Backend Dependencies
Run the following commands inside the `server` folder to install the necessary backend dependencies:

```bash - powershell 
cd server
npm install
```

#### 5. 🧬 Generate Sequelize Models
- Inside `server/src`, create a new folder called `models`:

```bash - powershell
mkdir src/models
```

- Run Sequelize Auto to generate models from the DB:

```bash
npx sequelize-auto -o "./src/models" -d <db_name> -h localhost -u <user> -x <password> -p 5432 -e postgres -l esm --cascadeModel p
```

📝 **Note:** Replace `<db_name>`, `<user>`, and `<password>` with your actual PostgreSQL credentials.

#### 6. 🛠️ Adjust `init-models.js`
- Manually tweak the `init-models.js` file:
  i/ Import the DB config: 

  ```js
  import { dbConfig } from "../config/db.config.js";
  ```

  ii/ Make sure `initModels` is exported like this:

  ```js
  export const initModels = (sequelize) => { ... }
  ```

  iii/ Finally, export the models:

  ```js
  export const models = initModels(dbConfig);
  ```

#### 7. 🔁 Start the Backend Server
Start the backend server:

```bash
npm run dev
```
***FRONTEND***
The backend will run on `http://localhost:3000`.

#### 8. 💅 Set Up the Frontend
Navigate to the `client` folder and install frontend dependencies:

```bash
cd ../client
npm install
```

#### 9. ▶️ Run the Frontend
Start the frontend:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default).

---

### ✅ You're Ready!

- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173`
- Full CRUD ready via API + React UI.
