//
function script12937(): void {
    var int0 = script14441();
    int0 = 36979 as struct;
    IF_SETTEXT(struct_getparam(int0, 6206), comp(1810, 0));
    IF_SETTEXT(struct_getparam(int0, 6207), comp(1810, 6));
    var int1 = 0;
    var int2 = enum_getvalue(0, 74, 706 as cs2enum, int1);
    var int3 = ENUM_GETOUTPUTCOUNT(706 as cs2enum);
    var int4 = 356;
    var int5 = MAX(40, MIN(60, (int4 / int3)));
    var int6 = MAX(0, MIN(8, ((int4 - (int5 * int3)) / (int3 + 1))));
    int4 = (int6 + 2);
    var int7 = -1 as struct;
    var int8 = comp(-1, 65535);
    while ((int1 < int3)) {
        int2 = enum_getvalue(0, 74, 706 as cs2enum, int1);
        if ((int2 != -1 as dbrow)) {
            int7 = enum_getvalue(0, 73, 11920 as cs2enum, int1);
            int8 = struct_getparam(int7, 6227);
            IF_SETHIDE(false, int8);
            if ((int8 != comp(-1, 65535))) {
                IF_SETPOSITION(0, int4, 1, 0, int8);
                IF_SETSIZE((4 + (int6 * 2)), int5, 1, 0, int8);
                IF_SETTEXT(dbrow_getfield(int2, 53280, 0), struct_getparam(int7, 6213));
                IF_SETTEXT(dbrow_getfield(int2, 53296, 0), struct_getparam(int7, 6212));
                int4 = (int4 + (int5 + int6));
            };
        };
        int1 = (int1 + 1);
    };
    return;
}