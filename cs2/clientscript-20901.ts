//
function script20901(int0: number): number {
    if ((int0 == -1)) {
        return 1;
    };
    var int1 = item_getparam(int0, 6628);
    if ((int1 == 0)) {
        if ((item_getparam(int0, 4749) != -1 as struct)) {
            int1 = script766(item_getparam(int0, 4749));
        } else {
            int1 = item_getparam(int0, 4742);
        };
    };
    if ((varplayer_3079 < int1)) {
        return 2;
    };
    if (((script4148() == 1) && (item_getparam(int0, 5033) == false))) {
        return 3;
    };
    return 0;
}