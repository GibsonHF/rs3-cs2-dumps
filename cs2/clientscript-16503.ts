//
function script16503(int0: component, int1: component, int2: component, int3: dbrow, int4: unknown_int, int5: dbrow, int6: struct): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    if ((int4 == 1)) {
        script16186(int0, int2);
    };
    script10026(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5);
    var int7 = 0;
    var int8 = -1 as dbrow;
    var int9 = 0;
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    var int14 = 0;
    while ((++int10 < DB_GETFIELDCOUNT(int3, 602112))) {
        [int7, int8, int9] = dbrow_getfield(int3, 602112, int10);
        if ((script16584(int7, int5) == 1)) {
            int11 = script16169(int8, int6);
            if ((int11 > 0)) {
                int14 = (3 + (2 * int10));
                int12 = (int12 + script16187(int10, int11, int14, enum_getvalue(0, 36, 16539 as cs2enum, int7), enum_getvalue(0, 36, 9715 as cs2enum, int7), int0, int1, int2));
                script16188(int10, int11, int14, int3, int0, int6);
            };
        };
    };
    CC_DELETEALL(int1);
    IF_SETSCROLLSIZE(0, int12, int0);
    IF_SETSCROLLPOS(0, 0, int0);
    script7791(int1, int0);
    if ((int12 > (IF_GETHEIGHT(int2) - 30))) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}