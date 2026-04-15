//
function script2735(int0: unknown_int): seq {
    var int1 = 31868 as seq;
    var int2 = INV_GETOBJ(671 as inv, 3);
    if ((int2 != -1 as obj)) {
        switch (item_getparam(int2, 686)) {
            case 14921:
            case 14943:
            case 14944:
            case 14945:
            case 14946:
            case 14947:
            case 14936:
            case 14934: {
                int1 = 31864 as seq;
                break;
            }
            case 14922:
            case 14923:
            case 14924:
            case 14925:
            case 14926:
            case 14927:
            case 14928:
            case 14929:
            case 14935:
            case 14938: {
                int1 = 31868 as seq;
                break;
            }
            case 14933: {
                int1 = 31878 as seq;
                break;
            }
            case 14931:
            case 14932:
            case 14930: {
                int1 = 31875 as seq;
                break;
            }
            case 14942: {
                int1 = 31877 as seq;
                break;
            }
            case 14937: {
                int1 = 31876 as seq;
                break;
            }
            case 14939:
            case 14940: {
                int1 = 31879 as seq;
                break;
            }
            default: {
                int1 = 31868 as seq;
                break;
            }
        };
    };
    return int1;
}