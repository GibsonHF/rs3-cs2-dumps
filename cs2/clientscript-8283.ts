//
function script8283(int0: struct, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = comp(-1, 65535);
    [int6, int2, int3, int4, int5] = script12343(int0, int1);
    if ((int6 == comp(-1, 65535))) {
        return;
    };
    var int7 = script14441();
    switch (int0) {
        case 34148: {
            if ((struct_getparam(int7, 5909) == comp(-1, 65535))) {
                IF_SETHIDE(true, comp(1784, 4));
                IF_SETHIDE(true, comp(1784, 3));
                int2 = 0;
                int3 = 0;
                int4 = 742;
                int5 = 404;
            } else {
                IF_SETHIDE(false, comp(1784, 4));
                IF_SETHIDE(false, comp(1784, 3));
            };
            break;
        }
    };
    IF_SETPOSITION(int2, int3, 0, 0, int6);
    IF_SETSIZE(int4, int5, 0, 0, int6);
    return;
}