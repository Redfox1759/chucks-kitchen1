# 🍽️ Chucks kitchen

A responsive digital food ordering Single Page Application (SPA) built with **React** and **Vite**.  

This project provides a structured online ordering experience that allows customers to browse meals, place orders, enter delivery details, review order summaries, and select payment options — reducing the need for manual order handling via WhatsApp and phone calls.

---

## 🚀 Live Features

- 🏠 Home page with food listings
- 📦 Delivery details form
- 🧾 Order summary breakdown
- 💳 Payment option interface
- 📋 My Orders page (simulated tracking)
- 🔄 Seamless navigation using React Router DOM
- 📱 Fully responsive design

---

## 🛠 Tech Stack

- **React.js** – Component-based UI architecture  
- **Vite** – Fast development server & optimized builds  
- **React Router DOM** – Client-side routing  
- **Tailwind CSS** – Utility-first styling  
- **React Icons** – Scalable icon components  

---

## 📂 Project Structure


food-ordering-app/
│
├── public/
│
├── src/
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── DeliveryDetails.jsx
│ │ ├── MyOrders.jsx
│ │ ├── OrderSummary.jsx
│ │ ├── PaymentOption.jsx
│ │
│ ├── components/
│ │ ├── Banner.jsx
│ │ ├── ChefsSpecials.jsx
│ │ ├── Footer.jsx
│ │ ├── Hero.jsx
│ │ ├── Navbar.jsx
│ │ ├── PopularDishes.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js


---

## 🧭 Routing

The application uses React Router DOM for navigation.

Accessible routes:


/home
/deliverydetails
/myorders
/ordersummary
/paymentoption


---

## ⚙️ Installation & Setup

1️⃣ Clone the repository:

```bash
git clone https://github.com/your-username/food-ordering-app.git

2️⃣ Navigate into the project directory:

cd food-ordering-app

3️⃣ Install dependencies:

npm install

4️⃣ Start development server:

npm run dev

5️⃣ Build for production:

npm run build
🎨 Design Implementation

The UI was built based on a Figma design and translated into code using:

Tailwind spacing system

Flexbox layout

Responsive utilities

Directional border radius utilities

Reusable components

⚠️ Current Limitations

No backend/API integration

No authentication system

No persistent storage (state resets on refresh)

No real payment gateway integration

Basic form validation

🔮 Future Improvements

Integrate backend REST API

Implement global cart state using Context API or Redux

Add advanced form validation

Add real-time order tracking

Improve accessibility (ARIA support)

Add loading & confirmation states

📌 Project Goal

This project demonstrates scalable frontend architecture, routing structure, reusable components, and responsive UI implementation for a real-world food ordering workflow.

👨‍💻 Author

Atokolo John
Frontend Developer
Focused on building accessible, user-friendly web interfaces with clean design and performance optimization.
