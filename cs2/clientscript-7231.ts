//
function script7231(int0: stat, int1: stat, int2: unknown_int): unknown_int {
    var int3 = (script7242(int0) - script7272(int0));
    var int4 = (script7242(int1) - script7272(int1));
    if ((int2 == 1)) {
        if ((int3 > int4)) {
            return 1;
        };
        if ((int3 < int4)) {
            return 0;
        };
        if ((script7292(int0) < script7292(int1))) {
            return 1;
        };
        return 0;
    };
    if ((script7272(int0) > script7272(int1))) {
        return 1;
    };
    if ((script7272(int0) < script7272(int1))) {
        return 0;
    };
    if ((script7292(int0) > script7292(int1))) {
        return 1;
    };
    return 0;
}