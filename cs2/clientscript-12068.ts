//
function script12068(int0: obj): int {
    if ((item_getparam(int0, 5528) != -1)) {
        return item_getparam(int0, 5528);
    };
    var int1 = item_getparam(int0, 5679);
    if ((int1 == -1)) {
        int1 = script7959(int0);
    };
    var int2 = 1575;
    if ((int1 >= 70)) {
        int2 = (((int1 - 70) * 225) + 2250);
    };
    if ((OC_WEARPOS(int0) == 5)) {
        int2 = SCALE(int2, 2, 1);
    } else if ((OC_WEARPOS2(int0) == 5)) {
        int2 = SCALE(int2, 2, 3);
    };
    if ((item_getparam(int0, 5524) == 3)) {
        int2 = (int2 / 4);
    };
    return int2;
}