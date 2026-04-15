//
function script16170(int0: dbrow, int1: int, int2: struct): [obj, int, int, int, int] {
    var int3 = DB_GETFIELDCOUNT(int0, 413696);
    var int4 = 0;
    var int5 = -1;
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = dbrow_getfield(int0, 413728, 0);
    var int16 = dbrow_getfield(int0, 413744, 0);
    if ((int15 == false)) {
        int14 = script16174(int2);
    };
    switch (int0) {
        case 4555:
        case 4556:
        case 4557:
        case 4558:
        case 4559: {
            return script4733(int0, int1);
        }
    };
    while ((++int1 < int3)) {
        [int7, int8, int9, int10, int12, int13, int11, int6] = dbrow_getfield(int0, 413696, int1);
        if ((script16175(int7, int11, int12, int13, int9, int14, int16) == 1)) {
            return [int7, int8, int9, int10, int1];
        };
    };
    return [-1 as obj, -1, -1, -1, int1];
}