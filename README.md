### The application is live at https://vidcraftai.vercel.app/.
Note: Image generation functionality is unavailable on the deployed version due to Vercel's limitations.

  
<p align="center">
  <img src="https://github.com/user-attachments/assets/900c9691-57ab-4800-a9a3-ec4b1e5dd42f" width="700" height="auto">
</p>

### To run locally
**1. Clone the Repository**
```
  git clone https://github.com/rishavd3v/vidcraft.git
  cd vidcraft
```
**2. Install Packages**  
  - Navigate to `/frontend`
```
cd frontend
npm install
```
- Navigate to `/frontend`
```
cd ../backend
npm install
```

**3. Set up Environment variables**
- Create a .env file in /backend. Add the following in .env
```
GOOGLE_API_KEY = [Gemini API key]
HF_API_KEY = [Huggung face API key (token)]
```
**4. Run application**
- Start the frontend server
```
cd ../frontend
npm run dev
```
- In a new terminal, start backend server
```
cd backend
npx nodemon
```

Visit https://localhost:5173 in your browser
