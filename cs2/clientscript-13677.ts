//
function script13677(int0: component, int1: component): void {
    var int2 = enum_getvalue(0, 74, 13176 as cs2enum, varbitplayer_37615);
    if ((int2 == -1 as dbrow)) {
        return;
    };
    var int3 = dbrow_getfield(enum_getvalue(0, 74, 13175 as cs2enum, varbitplayer_37614), 90272, 0);
    var int4 = DB_GETFIELDCOUNT(int2, 94288);
    var int5 = 0;
    var int6 = 0;
    define_array(int4);
    define_array[65536](int4);
    define_array[131072](int4);
    define_array[196608](int4);
    var int7 = 0;
    var int8 = 0;
    var int9 = -1;
    var int10 = -1 as dbrow;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    while ((++int9 < int4)) {
        int5 = dbrow_getfield(int2, 94288, int9);
        int10 = enum_getvalue(0, 74, 13175 as cs2enum, int5);
        int6 = dbrow_getfield(int10, 90272, 0);
        pop_array(int9, int5);
        pop_array[2](int9, int9);
        CC_CREATE(int0, 3, int9);
        if (((int5 == varbitplayer_37614) || ((int6 == 1) && (dbrow_getfield(int10, 90208, 0) < dbrow_getfield(enum_getvalue(0, 74, 13175 as cs2enum, varbitplayer_37614), 90208, 0))))) {
            pop_array[1](int9, (int9 + 1000));
            pop_array[3](int9, (int9 + 1000));
            int7 = (int7 + 1);
        } else if ((int6 == int3)) {
            pop_array[1](int9, int9);
            pop_array[3](int9, int9);
            int8 = (int8 + 1);
        } else if ((script16632(int10) == 1)) {
            pop_array[1](int9, (int9 + 1000));
            pop_array[3](int9, (int9 + 1000));
            int7 = (int7 + 1);
        } else {
            pop_array[1](int9, (int9 + 500));
            pop_array[3](int9, (int9 + 500));
        };
    };
    ARRAY_SORT(int4, 1, 0);
    ARRAY_SORT(int4, 3, 2);
    int9 = -1;
    int4 = (int4 - int7);
    while ((++int9 < int4)) {
        script13678(int0, int1, int9, push_array(int9), push_array[2](int9), int4, int8);
    };
    var int11 = ((20 + (int4 * 55)) + (MAX(0, int4) * 5));
    if ((int8 != 0)) {
        int11 = (int11 + 16);
    };
    if ((int11 < IF_GETHEIGHT(comp(1901, 1)))) {
        int11 = 0;
    };
    IF_SETSCROLLSIZE(0, int11, comp(1901, 2));
    IF_SETSCROLLPOS(0, 0, comp(1901, 2));
    script7791(comp(1901, 31), comp(1901, 2));
    script13680(push_array[2](0));
    IF_TRIGGEROP(int0, push_array[2](0), 1);
    return;
}