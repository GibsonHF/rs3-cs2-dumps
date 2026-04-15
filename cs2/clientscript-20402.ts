//
function script20402(int0: unknown_int): [obj, int] {
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = -1 as dbrow;
    var int4 = 17306 as dbrow;
    var int5 = 12949 as dbrow;
    var int6 = 17306 as dbrow;
    var int7 = 12949 as dbrow;
    var int8 = 17306 as dbrow;
    var int9 = 12949 as dbrow;
    var int10 = 17306 as dbrow;
    var int11 = 12950 as dbrow;
    switch (int0) {
        case 1: {
            int3 = int4;
            break;
        }
        case 2: {
            int3 = int5;
            break;
        }
        case 3: {
            int3 = int6;
            break;
        }
        case 4: {
            int3 = int7;
            break;
        }
        case 5: {
            int3 = int8;
            break;
        }
        case 6: {
            int3 = int9;
            break;
        }
        case 7: {
            int3 = int10;
            break;
        }
        case 8: {
            int3 = int11;
            break;
        }
        default: {
            script12478("Incorrect milestone value received when claiming prize. Defaulting.");
            int3 = int4;
            break;
        }
    };
    [int1, int2] = dbrow_getfield(int3, 1110016, 0);
    return [int1, int2];
}