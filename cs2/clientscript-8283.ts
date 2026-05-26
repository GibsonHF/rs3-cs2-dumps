//
function script8283(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    [int6, int2, int3, int4, int5] = script12343(int0, int1);
    if ((int6 == -1)) {
        return;
    };
    var int7 = script14441();
    switch (int0) {
        case 34148: {
            if ((struct_getparam(int7, 5909) == comp(-1, 65535))) {
                IF_SETHIDE(1, 116916228);
                IF_SETHIDE(1, 116916227);
                int2 = 0;
                int3 = 0;
                int4 = 742;
                int5 = 404;
            } else {
                IF_SETHIDE(0, 116916228);
                IF_SETHIDE(0, 116916227);
            };
            break;
        }
    };
    IF_SETPOSITION(int2, int3, 0, 0, int6);
    IF_SETSIZE(int4, int5, 0, 0, int6);
    return;
}