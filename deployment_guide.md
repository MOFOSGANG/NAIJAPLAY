# 🚀 Naija Play Deployment Guide: The Live Hustle

Since you are using **Render** for hosting, **Supabase** for the database, and **Redis** for real-time performance, follow these exact steps to take the compound live.

---

## 🏗️ Step 1: Set up Supabase (The Vault)
1.  Go to [Supabase.com](https://supabase.com) and create a new project.
2.  Go to **Project Settings** > **Database**.
3.  Find the **Connection string** section.
4.  Select **URI** and copy the string.
    > [!IMPORTANT]
    > Render requires the **Connection Pooler** (Session Mode) for stability. Look for a string looking like: `postgres://postgres.xxxx:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres`

---

## ⚡ Step 2: Set up Redis on Render
1.  Login to [Render.com](https://dashboard.render.com).
2.  Click **New +** > **Redis**.
3.  Name it `naija-play-redis`.
4.  Copy the **Internal Redis URL** (e.g., `redis://red-xxxx:6379`). You'll need this for the backend.

---

## 🌐 Step 3: Deploy the Monolith on Render
1.  Click **New +** > **Web Service**.
2.  Connect your GitHub repository: `https://github.com/MOFOSGANG/NaijaPlay.git`.
3.  **Instance Settings**:
    *   **Name**: `naija-play`
    *   **Region**: Select the same as your Supabase (e.g., US East / Ohio).
    *   **Environment**: `Docker` (This is critical as we use a multi-stage Dockerfile).
4.  **Environment Variables**:
    Click **Add Environment Variable** and add these:

| Key | Value | Notes |
| :--- | :--- | :--- |
| `DATABASE_URL` | *Your Supabase URI* | From Step 1 |
| `REDIS_URL` | *Your Internal Redis URL* | From Step 2 |
| `JWT_SECRET` | *Any long random string* | For account security |
| `GEMINI_API_KEY` | *Your Gemini API Key* | For AI translations/banter |
| `NODE_ENV` | `production` | Enables static serving & security |

---

## 🛠️ Step 4: Finalizing the Street
1.  Once the build starts, Render will run the `Dockerfile`.
2.  It will automatically compile the React frontend and start the Node.js backend.
3.  **Admin Login**: Once the logs say `FIRE NAIJA PLAY SERVER READY!`, go to your URL.
4.  Click **Login** and use:
    *   **Username**: `MOFOSGANG`
    *   **Password**: `MOFOSGNG12$`
    *   *(The server will auto-create this account on the first boot of the live DB!)*

---

## ⚠️ Pro-Tips for the Street Boss
- **Health Check**: Render might ask for a health check path. Use `/api/health`.
- **CORS**: If you see "blocked by CORS" errors, ensure `CORS_ORIGIN` is either `*` or your official `.render.com` URL in the environment variables.
- **Port**: The `Dockerfile` uses port `5000`. Render usually detects this, but you can set `PORT` to `5000` manually if needed.
