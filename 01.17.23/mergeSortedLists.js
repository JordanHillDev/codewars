// given the heads of two sorted linked lists list1 and list2

// return one sorted list that is the two lists merged

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(-Infinity);
    let prev = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }

    if (!list1) prev.next = list2;
    if (!list2) prev.next = list1;

    return dummy.next;
};


