//
function script8307(int0: int, int1: unknown_int): void {
    var int2 = script10405(int0);
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = 1;
    var int8 = 0;
    var int9 = 1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = 0;
    [int10, int11, int14, int14, int12, int13, int3, int4, int7, int8, int9] = script8701(9, int0);
    if ((int7 == 1)) {
        IF_SETHIDE(false, struct_getparam(int2, 3503));
        IF_SENDTOFRONT(struct_getparam(int2, 3503));
        if ((script12612(int2) == true)) {
            if ((int3 != -1)) {
                int5 = script8314(int3);
                int6 = (1 + script8372(struct_getparam(script10405(int5), 3509), int3));
            } else if ((int4 != -1)) {
                int5 = script8314(int4);
                int6 = script8372(struct_getparam(script10405(int5), 3509), int4);
            };
        } else if ((script8137(int0) == 1)) {
            script8140(int0, int3, int4);
        };
        script8387(int10, int11, int12, int13, int0);
        if (((int6 != -1) && (int5 != int0))) {
            script8356(int5, int0, int6, 1, 1);
        };
    } else {
        script8323(int0, 0);
    };
    if ((int1 == 1)) {
        script6739(3);
    };
    return;
}