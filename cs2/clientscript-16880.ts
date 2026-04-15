//
function script16880(int0: component, int1: int, int2: unknown_int): void {
    var int3 = enum_getvalue(0, 0, 14153 as cs2enum, int1);
    var int4 = script16023(int3);
    if ((int4 == -1 as dbrow)) {
        return;
    };
    var int5 = DB_GETFIELDCOUNT(int4, 315552);
    if ((int5 == 0)) {
        return;
    };
    define_array(int5);
    define_array[65536](int5);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    while ((int6 < int5)) {
        int9 = RANDOM(1073741823);
        int8 = dbrow_getfield(int4, 315552, int6);
        while ((int7 < 3)) {
            if (((CC_FINDBYCATEGORY(int0, int7, 0) == 1) && (cc_getparam(8704) == int8))) {
                int9 = (1073741823 + int6);
                int7 = 3;
            };
            int7 = (int7 + 1);
        };
        if ((STRING_LENGTH(script16830(int1, int8, int2)) > 0)) {
            pop_array[1](int10, int9);
            pop_array(int10, int8);
            int10 = (int10 + 1);
        };
        int6 = (int6 + 1);
        int7 = 0;
    };
    var int11 = 3;
    if ((int10 <= int11)) {
        IF_SETONTIMER(callback(), int0);
    } else {
        ARRAY_SORT(int10, 1, 0);
    };
    int6 = 0;
    var string0 = "";
    IF_SETPOSITION(0, 550, 1, 3, int0);
    IF_SETSIZE(10650, 8192, 2, 2, int0);
    var int12 = -1 as graphic;
    while ((int6 < int11)) {
        if ((int6 >= int10)) {
            int8 = -1;
            string0 = "";
            int12 = -1 as graphic;
        } else {
            int8 = push_array(int6);
            string0 = script16830(int1, int8, int2);
            int12 = 21645 as graphic;
        };
        script15938(int0, int6, 0, 0, 0, 1, 0, 0, 0, 1, 1);
        cc_setparam(8704, int8);
        if ((int2 == 1)) {
            script7918(int6, 1, 0, 0, 0, 1, 1, 8, 4, 1, int12);
            CC_SETASPECT(16, 16);
        };
        script10485(int6, 2, 0, 0, 2, 1, 0, 0, 1, 1, 2100 as dbrow, string0);
        if ((MODULO(int6, 2) == 0)) {
            CC_SETCOLOUR(16775126);
        } else {
            CC_SETCOLOUR(16777215);
        };
        CC_SETMAXLINES(1);
        int6 = (int6 + 1);
    };
    script16881(int0);
    return;
}