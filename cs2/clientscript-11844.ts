//
function script11844(int0: number): number {
    var int1 = 27485;
    var int2 = INV_GETOBJ(671, 3);
    if ((((varbitplayer_26893 != 7) && (int0 == 0)) || ((varbitplayer_26893 == 7) && (int0 == 1)))) {
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
            case 14939:
            case 14940: {
                int1 = 27485;
                break;
            }
            case 14930: {
                int1 = 27490;
                break;
            }
            case 14937:
            case 14933:
            case 14931:
            case 14932: {
                int1 = 27495;
                break;
            }
            case 14942: {
                int1 = 27505;
                break;
            }
            default: {
                int1 = 27500;
                break;
            }
        };
    } else {
        int1 = 27500;
    };
    if ((item_getparam(INV_GETOBJ(671, 5), 2832) == 1)) {
        int1 = 27485;
    };
    return int1;
}