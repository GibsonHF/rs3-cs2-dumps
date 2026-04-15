//
function script13864(int0: unknown_int): void {
    if ((script7942() == 1)) {
        return;
    };
    if (((((script15536() == 7) && (script15532(0) == 1)) && (varbitplayer_49044 == 10)) && (int0 <= 8))) {
        return;
    };
    if (((((CAM2_GETCONTROLMODE() != 1) || (varclient_3824 == 1)) || (varclient_173 == 1)) || ((varbitplayer_3028 == 1) && (varbitplayer_3031 != 1)))) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    switch (int0) {
        case 1:
        case 5: {
            int2 = varclient_2827;
            break;
        }
        case 2:
        case 6: {
            int2 = (0 - varclient_2827);
            break;
        }
        case 3:
        case 7: {
            int1 = varclient_2828;
            break;
        }
        case 4:
        case 8: {
            int1 = (0 - varclient_2828);
            break;
        }
        case 9: {
            int3 = -1;
            break;
        }
        case 10: {
            int3 = 1;
            break;
        }
        default: {
            return;
        }
    };
    if (((int0 == 9) || (int0 == 10))) {
        script8775(int3);
    } else if ((varclient_5109 != 1)) {
        script8768(int1, int2);
    };
    return;
}