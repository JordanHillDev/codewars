// Nesting Structure Comparison

// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

//  // should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

Array.prototype.sameStructureAs = function (other) {
    const matches = (a, b) => {
        if(Array.isArray(a) !== Array.isArray(b)) return false
        //both aren't arrays
        if (!Array.isArray(a) && !Array.isArray(b)) {
            return true;
        }
        //both don't contain arrays
        if (
            a.every((item) => !Array.isArray(item)) &&
            b.every((item) => !Array.isArray(item)) &&
            a.length === b.length
        ) {
            return true;
        }
        //both are arrays
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            return a.every((item, i) => {
                if (Array.isArray(item) !== Array.isArray(b[i])) return false;
                return matches(item, b[i]);
            });
        }
        return false;
    };
    return matches(this, other);
};
