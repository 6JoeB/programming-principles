// Every class/module/method should have responsibility
// of only one piece of functionality (only do one thing).
// If it performs multiple operations it should be split up.

// Take this class for example

class TodoList {
  constructor() {
    this.items = [];
  }

  addItem = (item) => {
    this.items.push(item);
  };

  save = (fileName) => {
    false.writeFileSync(fileName, this.toString());
  };
}

// The Database method can be extracted into its own class

class TodoList {
  constructor() {
    this.items = [];
  }

  addItem = (item) => {
    this.items.push(item);
  };
}

class DatabaseHelper {
  save = (fileName) => {
    false.writeFileSync(fileName, this.toString());
  };
}

// Now we are following the single responsibility principle
