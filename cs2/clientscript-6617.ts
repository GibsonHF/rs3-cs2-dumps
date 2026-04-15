//
function script6617(int0: int, int1: int, int2: unknown_int, int3: int, int4: int, int5: component): void {
    if ((CLIENTCLOCK() > int4)) {
        if ((int2 == 0)) {
            var int3 = MAX((int3 - 20), 0);
            if ((int3 == 0)) {
                var int2 = 1;
            };
        };
        if ((int2 == 1)) {
        } else {
        };
        if ((int2 == 2)) {
            int3 = MIN((int3 + 20), 255);
        };
        if ((int5 == comp(1324, 18))) {
            IF_SETTRANS(int3, comp(1324, 18));
            IF_SETTRANS(int3, comp(1324, 11));
        } else {
            IF_SETTRANS(int3, comp(1323, 58));
            IF_SETTRANS(int3, comp(1323, 8));
        };
        var int4 = (CLIENTCLOCK() + 1);
    };
    if ((CLIENTCLOCK() > int1)) {
        var int1 = (CLIENTCLOCK() + 30);
        var int0 = (int0 - 1);
    };
    if ((int0 == 2)) {
        int2 = 2;
    };
    if ((int0 == 0)) {
        IF_SETONTIMER(callback(), int5);
        IF_SETHIDE(1, int5);
    } else {
        IF_SETONTIMER(callback(script6617, int0, int1, int2, int3, int4, int5), int5);
    };
    return;
}