// given two linked lists whose digits are stores in reverse order with each node containing single digit

// return sum of linked lists back in a linked list in reverse order with one digit per node

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
    function getNumber(list) {
        let numArr = [];
        while (list) {
            numArr.push(list.val);
            list = list.next;
        }
        return numArr;
    }

    function addArrays(arr1, arr2) {
        let totalArr = [];

        let i = 0;
        let carry = 0;
        while (i < arr1.length || i < arr2.length || carry > 0) {
            let n1 = arr1[i] === undefined ? 0 : arr1[i];
            let n2 = arr2[i] === undefined ? 0 : arr2[i];
            let total = n1 + n2 + carry;
            totalArr.push(total % 10);
            total > 9 ? (carry = 1) : (carry = 0);
            i++;
        }

        return totalArr;
    }
    let totalArr = addArrays(getNumber(l1), getNumber(l2));

    let newList = new ListNode(-Infinity);
    let dummy = newList;

    for (let i = 0; i < totalArr.length; i++) {
        dummy.next = new ListNode(totalArr[i]);
        dummy = dummy.next;
    }

    return newList.next;
};
