//
function script13334(int0: cs2enum, int1: unknown_int): void {
    CC_DELETEALL(comp(1851, 40));
    IF_SETHIDE(true, comp(1851, 41));
    var int2 = 0;
    if ((int0 == -1 as cs2enum)) {
        script13615(int2, int1);
        return;
    };
    var int3 = -1 as struct;
    var int4 = ENUM_GETOUTPUTCOUNT(int0);
    define_array(int4);
    define_array[65536](int4);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -65535;
    var int9 = 0;
    var int10 = 20000;
    var int11 = 15000;
    if ((varbitplayer_48340 < varbitplayer_48341)) {
        int10 = 15000;
        int11 = 20000;
    };
    while ((int2 < int4)) {
        int3 = enum_getvalue(0, 73, int0, int2);
        if ((struct_getparam(int3, 6428) > 0)) {
            int3 = script13283(int3);
        };
        pop_array(int2, int2);
        int8 = script13280(int3);
        if ((int0 == 15228 as cs2enum)) {
            int9 = struct_getparam(int3, 7895);
            if ((DATE_RUNEDAY() > int9)) {
                int8 = -65535;
            };
        };
        switch (int8) {
            case -65535: {
                pop_array[1](int2, (int2 + 50000));
                int7 = (int7 + 1);
                break;
            }
            case -2: {
                pop_array[1](int2, (int2 + int10));
                int5 = (int5 + 1);
                break;
            }
            case -1: {
                if ((struct_getparam(int3, 6797) == 0)) {
                    pop_array[1](int2, (int2 + int11));
                    int6 = (int6 + 1);
                } else {
                    pop_array[1](int2, (int2 + 50000));
                    int7 = (int7 + 1);
                };
                break;
            }
            default: {
                if ((struct_getparam(int3, 6797) == 0)) {
                    pop_array[1](int2, (int2 + 10000));
                } else {
                    pop_array[1](int2, (int2 + 50000));
                    int7 = (int7 + 1);
                };
                break;
            }
        };
        script13335(int2, int3, int8);
        int2 = (int2 + 1);
    };
    ARRAY_SORT(int4, 1, 0);
    int2 = 0;
    int4 = (int4 - int7);
    if ((varbitplayer_48340 == 1)) {
        int4 = (int4 - int5);
    };
    if ((varbitplayer_48341 == 1)) {
        int4 = (int4 - int6);
    };
    while ((int2 < int4)) {
        script13336(int2, push_array(int2));
        int2 = (int2 + 1);
    };
    script13615(int2, int1);
    return;
}