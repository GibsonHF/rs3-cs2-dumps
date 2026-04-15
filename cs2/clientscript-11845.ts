//
function script11845(int0: unknown_int): seq {
    var int1 = 27510 as seq;
    var int2 = INV_GETOBJ(671 as inv, 3);
    if ((((varbitplayer_26893 != 8) && (int0 == 0)) || ((varbitplayer_26893 == 8) && (int0 == 1)))) {
        if ((int0 == 1)) {
            if ((int2 != -1 as obj)) {
                return BAS_GETANIM_READY(struct_getparam(item_getparam(int2, 686), 2954));
            };
            return BAS_GETANIM_READY(1426 as bas);
        };
        return -1 as seq;
    };
    if ((int2 != -1 as obj)) {
        switch (item_getparam(int2, 686)) {
            case 14933: {
                int1 = 27513 as seq;
                break;
            }
            case 14937: {
                int1 = 27516 as seq;
                break;
            }
            default: {
                int1 = 27510 as seq;
                break;
            }
        };
    };
    if ((item_getparam(INV_GETOBJ(671 as inv, 5), 2832) == 1)) {
        int1 = 27510 as seq;
    };
    return int1;
}