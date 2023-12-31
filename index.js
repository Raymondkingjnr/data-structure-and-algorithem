//BIG O
//Nested loops
const boxes = ["a", "b", "c", "d", "e"];

// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }
// //o(n)
// logAllPairsOfArray(boxes);

function arrayOfHi(n) {
  let hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }

  return hiArray;
}
console.log(arrayOfHi(5));

// const box = [1, 2, 4, 3, 5, 7, 3];

// const pairsOfArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// };

// pairsOfArray(box);

const anotherArray1 = ["a", "b", "c", "x"];
const anotherArray2 = ["z", "y", "a"];

function containsCommonItem(arr1, arr2) {
  //loop through first array and create object where properties === items in the array
  //can we assume always 2 params
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //loop through second array and check if item in second array exist on
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// console.log(containsCommonItem(anotherArray1, anotherArray2));

//Some built in method in javascript that can do the same taks quicker and faster.

function containsCommonItem2(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem2(anotherArray1, anotherArray2));

// instantiation

class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi I am ${this.name}, I'am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("raymond", "King");
const wizard2 = new Wizard("Arinze", "Hearler");

console.log(wizard1.play());
console.log(wizard1.introduce());

// implementing an array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = [];
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("are");
newArray.push("nice");
// newArray.delete(0);
console.log(newArray);

// ////// Reversing a string

// My solution

function reverse(str) {
  let spliteString = str.split("");
  let reverse = spliteString.reverse();

  return reverse;
}

console.log(reverse("hello"));

// // Teacher solution;

function redo(str) {
  //check input

  if (!str || str.length < 2 || typeof str !== "string") {
    return "That is not good";
  }
  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

console.log(reverse2("Hi my name is Raymond"));

/////////////merge and sort an array

function mergeSortedArrays(array1, array2) {
  const mergeArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  i = 1;
  j = 1;

  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    // console.log(array1Item, array2Item);

    if (!array2Item || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergeArray;
}

console.log(mergeSortedArrays([10, 3, 4, 15, 16], [4, 6, 30, 40, 50, 15, 12]));

// ///// HASH TABLES;

///// collision happens when there is a lot of data than the memory space.

let user = {
  user: "Raymond",
  age: 26,
  magic: true,
  scream: function () {
    console.log("ahhhhh");
  },
};

user.spell = "ahsggsha"; //0(1)

console.log(user);

const a = new Map();

// // Exr

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  //the get function in hash gets only the value.
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  //this allows us to loop through all our keys in our hashTable
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);

console.log(myHashTable);

console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("apples", 54));
console.log(myHashTable.set("oranges", 14));
console.log(myHashTable.set("mango", 20));
console.log(myHashTable.keys());
console.log(myHashTable.get("grapes"));

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

const recurringNumber = firstRecurringCharacter([2, 4, 4, 7, 9, 2, 3, 4, 3]);
console.log(recurringNumber);

//performing task with hashTables

function firstRecurringCharacter2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    // console.log(map);
  }

  return undefined;
}

const recurringNumber2 = firstRecurringCharacter2([
  2, 5, 5, 2, 1, 7, 8, 3, 4, 5, 8,
]);

console.log(recurringNumber2);

// Linked List

// A pointer is a refrence to another place in memory

//Linked list exercisers Append and prepend

class LinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const endNode = {
      value: value,
      next: null,
    };
    this.tail.next = endNode;
    this.tail = endNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const startNode = {
      value: value,
      next: null,
    };
    startNode.next = this.head;
    this.head = startNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traversIndex(index - 1);
    const holdpointer = leader.next;
    leader.next = newNode;
    newNode.next = holdpointer;
    this.length++;
    return this.printList();
  }

  traversIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traversIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode;
    this.length--;
    return this.printList();
  }
  reverse() {}
}

const myLinkList = new LinkList(20);
console.log(myLinkList.append(15));
console.log(myLinkList.prepend(25));
console.log(myLinkList.insert(2, 30));
console.log(myLinkList.insert(3, 60));
console.log(myLinkList.insert(2, 40));
console.log(myLinkList.remove(2));
// console.log(myLinkList.printList());

//Doubly Linked-list

class DoublyNode {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const endNode = {
      value: value,
      next: null,
      prev: null,
    };
    endNode.prev = this.tail;
    this.tail.next = endNode;
    this.tail = endNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const startNode = {
      value: value,
      next: null,
      prev: null,
    };
    startNode.next = this.head;
    this.head.prev = startNode;
    this.head = startNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currntNode = this.head;
    while (currntNode !== null) {
      array.push(currntNode.value);
      currntNode = currntNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.travserIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  travserIndex(index) {
    let counter = 1;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.travserIndex(index - 1);
    const unWantedNode = leader.next;
    // unWantedNode.prev = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

// const doublylinkedList = new DoublyNode(10);
// console.log(doublylinkedList.append(23));
// console.log(doublylinkedList.append(30));
// console.log(doublylinkedList.prepend(100));
// console.log(doublylinkedList.prepend(3));
// console.log(doublylinkedList.insert(10, 20));
// console.log(doublylinkedList.insert(3, 120));
// console.log(doublylinkedList.remove(3));
// console.log(doublylinkedList.reverse());

// Stack

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor() {
    (this.top = null), (this.bottom = null), (this.length = 0);
  }
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdpointer = this.top;
      this.top = newNode;
      this.top.next = holdpointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    // const holdingPointer = this.top
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.push("Google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));
console.log(myStack.push("pintrest"));
console.log(myStack.pop());
console.log(myStack.pop());

// console.log(myStack.peek());
