//
function script17981(int0: boolean, int1: boolean, int2: int, int3: int): [dbrow, dbrow] {
    var int4 = -1 as dbrow;
    var int5 = -1 as dbrow;
    switch (int3) {
        case 1: {
            return [7977 as dbrow, 7976 as dbrow];
        }
    };
    if ((int0 == true)) {
        if ((int1 == true)) {
            int4 = script17989(8);
            int5 = script17989(10);
        } else if ((int2 != -1)) {
            int4 = script17989(7);
            int5 = script17989(9);
        } else {
            int4 = script17989(7);
            int5 = script17989(9);
        };
    } else if ((int1 == true)) {
        int4 = script17989(12);
        int5 = script17989(14);
    } else if ((int2 != -1)) {
        int4 = script17989(11);
        int5 = script17989(13);
    } else {
        int4 = script17989(11);
        int5 = script17989(13);
    };
    return [int4, int5];
}