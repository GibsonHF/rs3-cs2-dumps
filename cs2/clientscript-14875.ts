//
function script14875(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): unknown_int {
    var int8 = int3;
    var int9 = int4;
    var int10 = IF_GETNEXTSUBID(int0);
    var int11 = script14662();
    var int12 = -1 as dbrow;
    var int13 = -1;
    int9 = (int9 + ((int6 - 60) / 2));
    while ((++int13 < 5)) {
        int8 = ((int3 + (int13 * 60)) + ((int13 + 1) * 5));
        int12 = script14655(int2, (int13 + 1));
        script10410(int0, int1, 28575 as struct, int8, int9, 60, 60, (int7 + int13), false, "");
        if ((int13 >= int11)) {
            script7924(int0, IF_GETNEXTSUBID(int0), 50, 50, (int8 + 5), (int9 + 5), 26605 as graphic, false, false, false, 0);
            script3537("Requires a higher qualification.");
        } else if ((int12 != -1 as dbrow)) {
            script7924(int0, IF_GETNEXTSUBID(int0), 56, 56, (int8 + 2), (int9 + 2), dbrow_getfield(int12, 372800, 0), false, false, false, 0);
            CC_SETONMOUSEREPEAT(callback(script3876, dbrow_getfield(int12, 372768, 0), -2147483645, -2147483643));
        } else if ((int0 == comp(693, 41))) {
            script7924(int0, IF_GETNEXTSUBID(int0), 36, 36, (int8 + 12), (int9 + 12), 18945 as graphic, false, false, false, 0);
        };
    };
    return 0;
}