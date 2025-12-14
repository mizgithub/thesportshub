# ⚽ Sports Hub Project

This project simulates a sports events application featuring a match fixture list and detailed match logs, showcasing dynamic data handling and UI presentation.

## ✨ Features

* **Match Fixtures Page:** Displays a list of upcoming and recent sports events.
* **Match Detail Page (Match Log):** Provides a comprehensive log of a specific match's events.
* **Dynamic Data Generation:** Includes a helper function to randomly generate missing data points to ensure the UI is fully populated and dynamic, mimicking real-time event updates.
    * **Generated Data Points:** Yellow/red card counts, minute-by-minute game event logs (e.g., goals, substitutions).

## 💻 Technologies Used

* **Build Tool:** Vite
* **Package Manager:** npm
* **API Integration:** Open sports API

## 🌐 API Data Handling

This project utilizes an **open-source sports API** to fetch event data.

> **Note:** The external API does not provide all the granular data required by the UI design (e.g., minute-by-minute events, card counts). Therefore, a custom helper function was implemented to **synthetically generate** this missing data. This allows the application to demonstrate the intended dynamic UI behavior.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js
* npm

### Installation and Execution

1.  **Clone the project repository:**
    ```bash
    git clone [Your Repository URL]
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd thesportshub
    ```

3.  **Install all required packages:**
    ```bash
    npm install
    ```

4.  **Run the Vite development server:**
    ```bash
    npm run dev
    ```

5.  **Access the application:**
    Open the provided URL by Vite (e.g., `http://localhost:5173/`) in your web browser.