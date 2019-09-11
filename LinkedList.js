const _Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    insertAfter(valueInsert,valueToLook){
        //null scenario
        if (this.head === null){
            console.log(`Could not find ${valueToLook} because your list is null sorry, no inserts made `)
        }
        let currentNode = this.head
        while (currentNode.value !==valueToLook && currentNode.next !== null ){
                currentNode = currentNode.next
            }
            if (currentNode.value === valueToLook){
                //present
                const insertMyNode = new _Node(valueInsert,currentNode.next)
                currentNode.next = insertMyNode
                console.log(`inserted ${valueInsert} after ${valueToLook}`)
            }else{
                //not present
                console.log(`Could not find ${valueToLook}, no inserts made `)
            }
    }
    insertBefore(valueInsert, valueToLook){
        
        //null scenario
        if (this.head === null){
            console.log(`Could not find ${valueToLook} because your list is null sorry, no inserts made `)
        }
        let currentNode = this.head

        //start scenario
        if (currentNode.value ===valueToLook ){
            this.insertFirst(valueInsert)
            console.log(`inserted ${valueInsert} before ${valueToLook}`)
        } 
        else {
            let previousNode
            //other scenario
            while (currentNode.value !==valueToLook && currentNode.next !== null ){
                previousNode = currentNode
                currentNode = currentNode.next
            }
            if (currentNode.value === valueToLook){
                const insertMyNode = new _Node(valueInsert,currentNode)
                previousNode.next = insertMyNode
                console.log(`inserted ${valueInsert} before ${valueToLook}`)
            }else{
                console.log(`Could not find ${valueToLook}, no inserts made `)
            }
            //reach the end scenario
        }
        
    }
    insertAt(insertValue, index){
        var count = 0
        let previousNode 
        let currentNode = this.head
        //start incrementing
        if(index ===0){
            this.insertFirst(insertValue)
        }
        else {
                while (count < index && currentNode.next !== null ){
                        count += 1
                        previousNode = currentNode
                        currentNode = currentNode.next
                    }
                if (count < index){
                    console.log(`Coult not insert ${insertValue} to index ${index} because index exceeds linkedlist index`)
                }
                else {
                    const newNode = new _Node(insertValue,currentNode)
                    previousNode.next=newNode
                }
            }
        
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}
function printMyList(node){
    var currentNode = node
    console.log(currentNode.value)
    while (currentNode.next !==null){
        currentNode = currentNode.next
        console.log(currentNode.value)
    }
}
function reverseAList(node){
    
}
function size(node){
    if (!node){
        return 0
    }
    else {
        var count = 1
        var currentNode = node
        while (currentNode.next !== null){
            count += 1
            currentNode = currentNode.next
        }
        return count
    }
}
function main(){
    const SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')

    // read what we have.
    console.log("**************************************************","\n")
    console.log('First Item')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    
    SLL.insertLast('Tauhida')
    console.log("**************************************************","\n")
    console.log('Added Tauhida')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    SLL.remove('Husker')
    console.log("**************************************************","\n")
    console.log('Remove Husker')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    SLL.insertBefore('Rey','Starbuck')
    console.log("**************************************************","\n")
    console.log('Added Rey before Starbuck')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    SLL.insertBefore('Erick','Apollo')
    console.log("**************************************************","\n")
    console.log('Added Erick before Apollo')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    SLL.insertAfter('Edith','Tauhida')
    console.log("**************************************************","\n")
    console.log('Added Edith After Tauhida')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    SLL.insertAfter('Andrew','Rey')
    console.log("**************************************************","\n")
    console.log('Added Andrew After Rey')
    console.log("\n","**************************************************")
    printMyList(SLL.head)
    
    SLL.insertAt('Dewi',3)
    console.log("**************************************************","\n")
    console.log('Added Dewi at index 3')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    SLL.insertAt('Japan',300)
    console.log("**************************************************","\n")
    console.log('Attempted to add Japan at index 300')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    SLL.insertAt('Japan',0)
    console.log("**************************************************","\n")
    console.log('Added Japan at index 0')
    console.log("\n","**************************************************")
    printMyList(SLL.head)

    console.log("**************************************************","\n")
    console.log('Length of current SLL')
    console.log("\n","**************************************************")

    console.log(`SLL length is ${size(SLL.head)}`)
    
}

function reverse(node){
    console.log('\n\nhere')
    if(node.next === null){
        console.log(`Done nothing to reverse`)
    }
    let lastNode = node
    while (lastNode.next!==null){
        lastNode = lastNode.next
    }
    let previousNode =node
    let currentNode = node.next
    //iterative approach
    while (currentNode.next !== null){
        previousNode = currentNode
        currentNode = currentNode.next 
        if (currentNode.next === null && node.value !== currentNode.value){
            currentNode.next = previousNode
            previousNode.next = null
            previousNode= node
            currentNode = node.next
        }
    }
    //put the first node at the end and point it to nothing
    previousNode.next = null
    currentNode.next = previousNode
    console.log('done')
    //returns the last node. Make this your head.
    return lastNode
}

function secondary(){
    /**
     * Mystery function
     *      //start examining a node at the head.
            //iterate through the rest of the items in the linked list and removes that item from the linked list.
     */

    //create a linkedLIst
    const SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Third_item_to_find')
    SLL.insertLast('Helo')
    SLL.insertLast('Middle')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Starrrrrzaligned')
    SLL.insertLast('finesse')
    console.log("**************************************************","\n")
    console.log('Start')
    console.log("\n","**************************************************")
    printMyList(SLL.head)
    SLL.head = reverse(SLL.head)
    console.log("**************************************************","\n")
    console.log('Reversed the list')
    console.log("\n","**************************************************")
    printMyList(SLL.head)
    console.log("**************************************************","\n")
    console.log('Third from  the list')
    console.log("\n","**************************************************")
    thirdAlgo(SLL.head)
    console.log("**************************************************","\n")
    console.log('Middle of the list')
    console.log("\n","**************************************************")
    middleFunction(SLL.head)
    console.log("**************************************************","\n")
    console.log('CycleCheck')
    console.log("\n","**************************************************")
    const noCycle = new LinkedList()
    noCycle.insertFirst('One')
    noCycle.insertLast('Two')
    noCycle.insertLast('Three')
    noCycle.insertLast('Four')
    noCycle.insertLast('Five')
    noCycle.insertLast('Six')
    noCycle.insertLast('Seven')
    cycleInAList(noCycle.head)
    console.log("**************************************************","\n")
    console.log('BreakCycle')
    console.log("\n","**************************************************")
    //break the list
    noCycle.head.next.next.next = noCycle.head.next
    cycleInAList(noCycle.head)
}
function thirdAlgo(node){
    const mySize = size(node) 
    const desiredIndexx = mySize-3
    var currentNode = node 
    var index = 0
    while (index <desiredIndexx ){
        index +=1
        currentNode = currentNode.next   
    }
    console.log(currentNode.value)
}

function middleFunction(node){
    const mySize = size(node) 
    const desiredIndexx = Math.floor(mySize/2)
    var currentNode = node 
    var index = 0
    while (index <desiredIndexx ){
        index +=1
        currentNode = currentNode.next   
    }
    console.log(currentNode.value)
}

function cycleInAList(node){
    //design this to check then BREAK
    var currentNode =node
    const pastValue = []
    
    while (currentNode.next !== null && pastValue.indexOf(currentNode.value) === -1){
        pastValue.push(currentNode.value)
        console.log(pastValue)
        currentNode =currentNode.next
    }
    if (currentNode.next === null){
        console.log(`completed no repeeats ${pastValue}`)
    }
    else {
        console.log(`Cycles present ${pastValue}`)
    }

}

//main()
secondary()


module.exports = LinkedList