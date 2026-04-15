//
function script14001(int0: component, int1: struct, int2: int, int3: unknown_int, int4: int, int5: unknown_int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int6 = struct_getparam(int1, 4405);
    if ((int6 != -1 as struct)) {
        var int1 = int6;
    };
    var int7 = script9984(int1, 1);
    var int8 = script9984(int1, 2);
    var int9 = script9984(int1, 3);
    var int10 = int7;
    var int11 = script12838(int0, (int2 + 10));
    if ((int4 == 1)) {
        int7 = script9984(int1, 4);
        int8 = int7;
        int10 = int7;
    } else if ((int3 == 1)) {
        int7 = script9984(int1, 5);
        int10 = int7;
    } else if ((((int11 == 1) && (int8 != -1 as struct)) && (int4 != -1))) {
        int10 = int8;
    };
    if ((CC_FIND(int0, (int2 + 10)) == 1)) {
        CC_SETONVARTRANSMIT(callback(script10412, -2147483645, -2147483643, int1, int3, int2, int4, int5, 3814, 1));
        if ((int3 == 1)) {
            CC_SETONMOUSEOVER(callback());
            CC_SETONMOUSELEAVE(callback());
            CC_SETONCLICK(callback());
            CC_SETONRELEASE(callback());
        } else if (((int7 != -1 as struct) && (int8 != -1 as struct))) {
            CC_SETONMOUSEOVER(callback(script10413, -2147483645, int8, int2, 1));
            CC_SETONMOUSELEAVE(callback(script10413, -2147483645, int7, int2, 0));
            if ((int9 != -1)) {
                CC_SETONCLICK(callback(script14000, -2147483645, int9, int1, int2, 1, int4, int5));
                CC_SETONRELEASE(callback(script10414, -2147483645, int7, int8, int2));
            };
        };
    };
    var int12 = struct_getparam(int1, 4398);
    if (((int12 == -1 as struct) || ((struct_getparam(int12, 3808) == struct_getparam(int10, 3808)) && (struct_getparam(int12, 3807) == struct_getparam(int10, 3807))))) {
        script10415(int0, int10, int2, int11);
    } else if ((int5 == 0)) {
        script14418(int0, int10, int2, int11);
    } else {
        script14417(int0, int10, int2, int11);
    };
    return;
}