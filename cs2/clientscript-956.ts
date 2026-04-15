//
function script956(int0: unknown_int): seq {
    var int1 = 27074 as seq;
    var int2 = INV_GETOBJ(671 as inv, 3);
    if ((((varbitplayer_26893 != 2) && (int0 == 0)) || ((varbitplayer_26893 == 2) && (int0 == 1)))) {
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
                int1 = 27077 as seq;
                break;
            }
            case 14933:
            case 14930:
            case 14931:
            case 14932: {
                int1 = 27080 as seq;
                break;
            }
            case 14937: {
                int1 = 27083 as seq;
                break;
            }
            case 14939:
            case 14940:
            case 14942: {
                int1 = 27086 as seq;
                break;
            }
            default: {
                int1 = 27074 as seq;
                break;
            }
        };
    };
    if ((item_getparam(INV_GETOBJ(671 as inv, 5), 2832) == 1)) {
        int1 = 27074 as seq;
    };
    return int1;
}