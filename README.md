# Exchange Rates React App (TypeScript)

A simple React application that fetches exchange rates from the CoinGecko API and displays them using a dropdown and table UI.

---

## 🚀 Features

* Fetch exchange rates from public API
* Populate dropdown dynamically
* Display selected currency details in table
* Built with React + TypeScript
* Clean and minimal architecture (no Context API)

---

## 🛠️ Tech Stack

* React
* TypeScript
* Tailwind CSS (optional styling)
* Fetch API
* NextJS

---

## 📡 API Used

* [https://api.coingecko.com/api/v3/exchange_rates](https://api.coingecko.com/api/v3/exchange_rates)

---

## 📁 Project Structure

```
src/
 ├── components/
 │    └── ExchangeRates.tsx
 ├── utils/
 │    └── api.ts
 ├── types/
 │    └── exchange.ts
 ├── App.tsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/shradha1310/react-exchange-rates-app.git
cd <your-project-folder>
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app

```
npm run dev
```

---

## 📌 How It Works

1. On component mount, API is called using `useEffect`
2. Exchange rates are stored in local state
3. Dropdown is populated using dynamic keys
4. On selection, corresponding currency data is shown in a table

---

## 🧠 Key Concepts Covered

* API integration in React
* State management using `useState`
* Side effects using `useEffect`
* Type safety with TypeScript
* Controlled components (dropdown)

---

## 📸 UI Behavior

* Default currency is selected after API load
* Dropdown allows switching currencies
* Table updates dynamically based on selection

---

## ⚡ Future Improvements

* Add loading skeleton
* Add error UI
* Integrate React Query for caching
* Add search/filter in dropdown
* Convert into reusable component library

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

* CoinGecko API for free exchange rate data

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
