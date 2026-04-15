//
function script17225(int0: int, int1: dbrow): void {
    CC_DELETEALL(comp(1030, 16));
    CC_DELETEALL(comp(1030, 17));
    CC_DELETEALL(comp(1030, 18));
    CC_DELETEALL(comp(1030, 19));
    if ((int1 == -1 as dbrow)) {
        return;
    };
    IF_SETSCROLLPOS(0, 0, comp(1030, 14));
    script17222(comp(1030, 14), IF_GETSCROLLHEIGHT(comp(1030, 14)), -1, comp(1030, 22), comp(1030, 23));
    var int2 = -1;
    var int3 = DB_GETFIELDCOUNT(int1, 892928);
    var int4 = -1 as dbrow;
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    var int8 = -1 as dbrow;
    var int9 = 0;
    var int10 = 50;
    var int11 = int10;
    var int12 = 0;
    var int13 = IF_GETHEIGHT(comp(1030, 14));
    var int14 = int13;
    while ((++int2 < int3)) {
        int4 = dbrow_getfield(int1, 892928, int2);
        if ((int4 != -1 as dbrow)) {
            int5 = -1;
            int6 = DB_GETFIELDCOUNT(int4, 897024);
            if ((MODULO(int2, 2) == 0)) {
                int9 = 0;
                int12 = int11;
            } else {
                int9 = (IF_GETWIDTH(comp(1030, 16)) - 326);
                int11 = int12;
            };
            while ((++int5 < int6)) {
                int8 = dbrow_getfield(int4, 897024, int5);
                if ((int8 != -1 as dbrow)) {
                    int7 = DB_GETFIELDCOUNT(int8, 901136);
                    if (((int7 > 0) && (int5 > 0))) {
                        int11 = (int11 + 16);
                    };
                    int11 = script17226(comp(1030, 16), comp(1030, 17), comp(1030, 18), comp(1030, 19), int0, int8, int9, int11, 326, 70);
                };
            };
            if (((MODULO(int2, 2) != 0) && ((int2 + 1) < int3))) {
                int11 = (int12 + int13);
                int14 = (int14 + int13);
            };
        };
    };
    IF_SETSCROLLSIZE(0, int14, comp(1030, 14));
    if ((int14 > int13)) {
        IF_SETHIDE(false, comp(1030, 15));
        script17220(67502094, int13, 67502100, 67502102, 67502101, 67502103);
    } else {
        IF_SETHIDE(true, comp(1030, 15));
    };
    return;
}