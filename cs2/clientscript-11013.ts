//
function script11013(int0: unknown_int): seq {
    var int1 = 25681 as seq;
    var int2 = INV_GETOBJ(671 as inv, 3);
    if ((((varbitplayer_26893 != 1) && (int0 == 0)) || ((varbitplayer_26893 == 1) && (int0 == 1)))) {
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
            case 14921:
            case 14922:
            case 14923:
            case 14924:
            case 14925:
            case 14926:
            case 14927:
            case 14928:
            case 14929:
            case 14938:
            case 14941:
            case 14943:
            case 14944:
            case 14945:
            case 14946:
            case 14947:
            case 14935:
            case 14936:
            case 14934:
            case 31925: {
                int1 = 25678 as seq;
                break;
            }
            case 14930:
            case 14931:
            case 14932:
            case 14933: {
                int1 = 25679 as seq;
                break;
            }
            case 14939:
            case 14940:
            case 14942: {
                int1 = 25680 as seq;
                break;
            }
            case 14937: {
                int1 = 25677 as seq;
                break;
            }
        };
    };
    if ((item_getparam(INV_GETOBJ(671 as inv, 5), 2832) == 1)) {
        int1 = 25678 as seq;
    };
    return int1;
}