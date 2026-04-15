//
function script7246(int0: obj): int {
    var int1 = 0;
    var int2 = MAX(1, item_getparam(int0, 2970));
    if ((item_getparam(int0, 642) > 0)) {
        int1 = SCALE(script2916(), 100, item_getparam(int0, 642));
    };
    if ((item_getparam(int0, 963) > 0)) {
        int1 = (int1 + item_getparam(int0, 963));
    };
    if ((int1 > 0)) {
        return (int1 / int2);
    };
    if ((OC_CATEGORY(int0) == 3868 as category)) {
        int1 = SCALE(int1, 100, 120);
    };
    if ((item_getparam(int0, 1047) == 1)) {
        return (int1 / int2);
    };
    return (MAX(200, int1) / int2);
}