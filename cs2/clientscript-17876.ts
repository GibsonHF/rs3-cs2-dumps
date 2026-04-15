//
function script17876(int0: dbrow, int1: int, int2: unknown_int): [boolean, dbrow] {
    script17927();
    var int3 = 0;
    var int4 = -1 as dbrow;
    var int5 = -1 as dbrow;
    var int6 = -1 as dbrow;
    var int7 = -1 as dbrow;
    var int8 = -1 as dbrow;
    var int9 = script17874(int0, int1);
    [int3, int4, int5, int6, int7, int8] = script17878(int0, int1);
    var int10 = -1 as dbrow;
    switch (int2) {
        case 0: {
            int10 = int4;
            break;
        }
        case 1: {
            int10 = int5;
            break;
        }
        case 2: {
            int10 = int6;
            break;
        }
        case 3: {
            int10 = int7;
            break;
        }
        case 4: {
            int10 = int8;
            break;
        }
        default: {
            script12478("Index out of range");
            break;
        }
    };
    return [int9, int10];
}