# Task List Application

This project is a **React** application that allows users to manage a task list. It includes features for adding, removing, and synchronizing tasks using **localStorage**. The application is structured with a reducer for managing the task list and supports cross-tab synchronization using browser events.

## Features

- **Add tasks**: Users can input tasks, which are added to the list when submitted.
- **Remove tasks**: Each task has a delete option to remove it from the list.
- **Persist data in localStorage**: The task list is stored in local storage, allowing the data to persist across page reloads.
- **Cross-tab sync**: Changes made in one browser tab are automatically updated in other open tabs using the `storage` event.
  
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-list-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd task-list-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

## Usage

1. Add tasks by typing into the input field and pressing "Enter" or clicking the submit button.
2. Remove tasks by clicking the delete button next to each task.
3. Changes are automatically saved to localStorage, and the task list persists across page reloads.
4. Open the app in multiple browser tabs—any changes in one tab will be reflected in others.
