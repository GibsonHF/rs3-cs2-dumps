//
function script17877(int0: int, int1: dbrow, int2: dbrow, int3: dbrow, int4: dbrow, int5: dbrow): dbrow {
    var int6 = -1 as dbrow;
    switch (int0) {
        case 0: {
            int6 = int1;
            break;
        }
        case 1: {
            int6 = int2;
            break;
        }
        case 2: {
            int6 = int3;
            break;
        }
        case 3: {
            int6 = int4;
            break;
        }
        case 4: {
            int6 = int5;
            break;
        }
        default: {
            script12478("Index out of range");
            break;
        }
    };
    return int6;
}