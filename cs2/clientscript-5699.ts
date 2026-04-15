//
function script5699(int0: unknown_int, int1: int, int2: int, int3: cs2enum): void {
    var int4 = ((int1 + int2) / 2);
    var int5 = push_array(int4);
    pop_array(int4, push_array(int2));
    pop_array(int2, int5);
    var int6 = int1;
    var int7 = int1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as obj;
    var int12 = -1 as obj;
    while ((int7 < int2)) {
        int11 = struct_getparam(enum_getvalue(0, 73, int3, push_array(int7)), 2213);
        int12 = struct_getparam(enum_getvalue(0, 73, int3, int5), 2213);
        if (((((int11 != -1 as obj) && (item_getparam(int11, 2640) > 0)) && (item_getparam(int11, 2640) != 62)) && (item_getparam(int11, 2641) == 0))) {
            if ((item_getparam(int11, 2640) == varclient_1753)) {
                int9 = item_getparam(int11, 2645);
            } else {
                int9 = script12098(enum_getvalue(0, 73, int3, push_array(int7)));
            };
        } else {
            int9 = script12098(enum_getvalue(0, 73, int3, push_array(int7)));
        };
        if (((((int12 != -1 as obj) && (item_getparam(int12, 2640) > 0)) && (item_getparam(int12, 2640) != 62)) && (item_getparam(int12, 2641) == 0))) {
            if ((item_getparam(int12, 2640) == varclient_1753)) {
                int10 = item_getparam(int12, 2645);
            } else {
                int10 = script12098(enum_getvalue(0, 73, int3, int5));
            };
        } else {
            int10 = script12098(enum_getvalue(0, 73, int3, int5));
        };
        if (((int9 > int10) || ((int9 == int10) && (push_array(int7) > int5)))) {
            int8 = push_array(int7);
            pop_array(int7, push_array(int6));
            pop_array(int6, int8);
            int6 = (int6 + 1);
        };
        int7 = (int7 + 1);
    };
    pop_array(int2, push_array(int6));
    pop_array(int6, int5);
    if ((int1 < (int6 - 1))) {
        script5699(0, int1, (int6 - 1), int3);
    };
    if (((int6 + 1) < int2)) {
        script5699(0, (int6 + 1), int2, int3);
    };
    return;
}