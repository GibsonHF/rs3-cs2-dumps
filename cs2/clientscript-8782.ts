//
function script8782(int0: int, int1: unknown_int, int2: component, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    IF_SETONRESIZE(callback(), int2);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 1;
    var int13 = script10405(int0);
    var int14 = -1;
    if ((int13 != -1)) {
        int14 = struct_getparam(int13, 3503);
        if ((((int14 != comp(-1, 65535)) && (IF_GETHIDE(int14) == false)) && ((struct_getparam(int13, 3526) == true) || (script20451(int13) != 0)))) {
            [int8, int9, int10, int11, int12] = script8382(int3, int4, int5, int6, int0, 0, 1);
            if (((int12 == 1) && ((int7 > 0) || (script8399(int3, int4, (int3 + int5), (int4 + int6), int8, int9, (int8 + int10), (int9 + int11)) >= ((int10 * int11) / 3))))) {
                script8387(int8, int9, int10, int11, int0);
            } else if (((int7 < 1) || (script12612(int13) == false))) {
                if ((int7 < 5)) {
                    IF_SETONRESIZE(callback(script8782, int0, int1, -2147483645, IF_GETX(int14), IF_GETY(int14), IF_GETWIDTH(int14), IF_GETHEIGHT(int14), (int7 + 1)), int14);
                    IF_CALLONRESIZE(int14);
                    varclient_3474 = (varclient_3474 + 1);
                } else {
                    script8387(IF_GETX(int14), IF_GETY(int14), IF_GETWIDTH(int14), IF_GETHEIGHT(int14), int0);
                };
            } else {
                IF_SETONRESIZE(callback(script8783, int0, int1, -2147483645), int14);
                IF_CALLONRESIZE(int14);
                varclient_3474 = (varclient_3474 + 1);
            };
        };
    };
    script8784();
    return;
}