//
function script16911(int0: int, int1: int, int2: int, int3: unknown_int): void {
    var int4 = script16916(int1);
    var int5 = script16917(int1);
    var int6 = script16916(int2);
    var int7 = script16917(int2);
    if (((int0 < 50) || (int3 == 1))) {
        IF_SETPARAM_INT(8704, int2, comp(907, 69));
        IF_SETTRANS((255 - SCALE(int0, 50, 255)), int7);
        if ((int1 != -1)) {
            IF_SETTRANS(SCALE(int0, 50, 255), int5);
        };
        if (((IF_GETTRANS(int7) >= 128) || (int3 == 1))) {
            if ((int1 != -1)) {
                IF_SETHIDE(true, int4);
            };
            IF_SETHIDE(false, int6);
            script16905(int2);
        };
        if ((int3 == 0)) {
            IF_SETONTIMER(callback(script16910, (int0 + 1), int1, int2), 59441156);
            return;
        };
    };
    script16908(true);
    IF_SETONTIMER(callback(), comp(907, 4));
    IF_SETONTIMER(callback(script16909, int2, 0), 59441154);
    return;
}