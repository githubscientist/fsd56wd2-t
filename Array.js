// DON'T TRY THIS
// let numbers = new Array();

// numbers.push(5);
// numbers.push(4, 6, 7);

// numbers.pop();

// console.log(numbers);
class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.ref = null;
    }

    toArray() {
        let items = [];
        let tref = this.ref;
        while (tref != null) {
            items.push(tref.data);
            tref = tref.next;
        }
        return items;
    }

    push(data) {
        let newItem = new Item(data);
        if (this.ref === null) {
            this.ref = newItem;
        } else {
            let tref = this.ref;
            while (tref.next != null) {
                tref = tref.next;
            }
            tref.next = newItem;
        }
    }

    whileEach(func) {
        let tref = this.ref;
        let items = [];
        while (tref != null) {
            items.push(tref.data);
            tref = tref.next;
        }

        tref = this.ref;
        let index = 0;
        while (tref != null) {
            func(tref.data, index++, items);
            tref = tref.next;
        }
    }
}

module.exports = Array;

