//
function script5612(int0: component, int1: int, int2: int, int3: unknown_int, int4: int, int5: int, int6: int): void {
    if ((CLIENTCLOCK() > int4)) {
        var int4 = (CLIENTCLOCK() + 50);
        if ((int3 == 1)) {
            if (((int2 + 5) <= 120)) {
                var int2 = (int2 + 5);
            } else {
                int2 = 120;
                var int3 = 0;
            };
        } else if (((int2 - 5) >= 0)) {
            int2 = (int2 - 5);
        } else {
            int2 = 0;
            int3 = 1;
        };
        IF_SETMODELTINT(int1, 3, 50, int2, int0);
    };
    if ((MODULO(CLIENTCLOCK(), 1000) < 500)) {
        IF_SETMODELANGLE(0, 0, AND((IF_GETMODELANGLE_X(int0) + int5), 2047), AND((IF_GETMODELANGLE_Y(int0) + int6), 2047), AND((IF_GETMODELANGLE_Z(int0) + 0), 2047), IF_GETMODELZOOM(int0), int0);
    } else {
        IF_SETMODELANGLE(0, 0, AND((IF_GETMODELANGLE_X(int0) + int6), 2047), AND((IF_GETMODELANGLE_Y(int0) + int5), 2047), AND((IF_GETMODELANGLE_Z(int0) + 0), 2047), IF_GETMODELZOOM(int0), int0);
    };
    IF_SETONTIMER(callback(script5612, int0, int1, int2, int3, int4, int5, int6), int0);
    return;
}