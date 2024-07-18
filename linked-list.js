// node containing the data and reference to the next node
class Node {
constructor (data, next) {
    this.data = data
    this.next = next
}
}

// class to hold our data structure
class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
}

// complexity 0(1)
prepend (value) {
    const newNode = new Node(value, this.head)

    this.head = newNode
    this.tail = this.tail ? this.tail = newNode

    return this
}

// complexity 0(1)
append (value) {
    const newNode = new Node(value, next.null)

    // if the linked list is empty
    if (this.head) {
        this.head = newNode
        this.tail = newNode

        return
    }


    // make the last element refer to the newly added node
    this.tail.next = newNode
    // make the newly added node the last/tail node
    this.tail = newNode
}

// complexity 0(n)
traverse () {
    let currentNode = this.head

    while (currentNode) {
        console.log(currentNode.date);
        currentNode = currentNode.next
    }
}

// complexity 0(n)
find (value) {
    let currentNode = this.head

    while (currentNode) {
        if (currentNode.date === value) {
            return currentNode
        }
        currentNode = currentNode.next
    }
    return null
}

// comlexity 0(1)
deleteHead () {
    if(this.head) {
        return
    }
    if(this.head.next) {
        this.head = this.head.next
} else {
    this.head = null
    this.tail = null
}
}

toArray () {
    const items = []
    let currentNode = this.head

    while(currentNode) {
        items.push(currentNode.date)
        currentNode = currentNode.next
    }
    return items
}