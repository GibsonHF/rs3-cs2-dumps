//
function script8357(int0: int): void {
    var int1 = script10405(int0);
    var int2 = struct_getparam(int1, 3509);
    var int3 = comp(-1, 65535);
    var int4 = script8374(int2);
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    [int9, int10, int11, int12] = script8717(int0);
    while ((int5 < int4)) {
        int6 = script8371(int2, int5);
        int1 = script10405(int6);
        int3 = struct_getparam(int1, 3503);
        if ((int6 != int0)) {
            IF_SETPOSITION(int9, int10, 0, 0, int3);
            IF_SETSIZE(int11, int12, 0, 0, int3);
            if (((script6213(int6) == 0) || (int6 == 17))) {
                script8361(int6);
                IF_SETHIDE(false, int3);
                if ((int7 != -1)) {
                    script8356(int7, int6, int8, 1, 0);
                    script8705(int7);
                };
                int7 = int6;
                int8 = (int8 + 1);
            } else {
                IF_SETHIDE(true, int3);
                script8268(int0, 1);
            };
            script8705(int6);
        };
        int5 = (int5 + 1);
    };
    if ((int7 != -1)) {
        script8390(int7);
    };
    int1 = script10405(int0);
    int3 = struct_getparam(int1, 3503);
    IF_SETHIDE(true, int3);
    IF_SETPOSITION(int9, int10, 0, 0, int3);
    IF_SETSIZE(int11, int12, 0, 0, int3);
    return;
}