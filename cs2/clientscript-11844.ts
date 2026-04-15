//
function script11844(int0: unknown_int): seq {
    var int1 = 27485 as seq;
    var int2 = INV_GETOBJ(671 as inv, 3);
    if ((((varbitplayer_26893 != 7) && (int0 == 0)) || ((varbitplayer_26893 == 7) && (int0 == 1)))) {
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
            case 14939:
            case 14940: {
                int1 = 27485 as seq;
                break;
            }
            case 14930: {
                int1 = 27490 as seq;
                break;
            }
            case 14937:
            case 14933:
            case 14931:
            case 14932: {
                int1 = 27495 as seq;
                break;
            }
            case 14942: {
                int1 = 27505 as seq;
                break;
            }
            default: {
                int1 = 27500 as seq;
                break;
            }
        };
    } else {
        int1 = 27500 as seq;
    };
    if ((item_getparam(INV_GETOBJ(671 as inv, 5), 2832) == 1)) {
        int1 = 27485 as seq;
    };
    return int1;
}