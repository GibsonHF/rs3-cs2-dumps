//
function script11845(int0: number): number {
    var int1 = 27510;
    var int2 = INV_GETOBJ(671, 3);
    if ((((varbitplayer_26893 != 8) && (int0 == 0)) || ((varbitplayer_26893 == 8) && (int0 == 1)))) {
        if ((int0 == 1)) {
            if ((int2 != -1)) {
                return BAS_GETANIM_READY(struct_getparam(item_getparam(int2, 686), 2954));
            };
            return BAS_GETANIM_READY(1426 as bas);
        };
        return -1;
    };
    if ((int2 != -1)) {
        switch (item_getparam(int2, 686)) {
            case 14933: {
                int1 = 27513;
                break;
            }
            case 14937: {
                int1 = 27516;
                break;
            }
            default: {
                int1 = 27510;
                break;
            }
        };
    };
    if ((item_getparam(INV_GETOBJ(671, 5), 2832) == 1)) {
        int1 = 27510;
    };
    return int1;
}