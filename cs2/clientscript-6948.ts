//
function script6948(int0: int): void {
    if ((int0 == 13)) {
        script675();
    };
    var int1 = 0;
    var int2 = 0;
    while ((int2 < 18)) {
        switch (int2) {
            case 0: {
                if ((varclient_1703 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 1: {
                if ((varclient_1704 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 2: {
                if ((varclient_1705 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 3: {
                if ((varclient_1706 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 4: {
                if ((varclient_1707 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 5: {
                if ((varclient_1708 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 6: {
                if ((varclient_1709 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 7: {
                if ((varclient_1710 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 8: {
                if ((varclient_1711 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 9: {
                if ((varclient_1712 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 10: {
                if ((varclient_1713 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 11: {
                if ((varclient_1714 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 12: {
                if ((varclient_1715 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 13: {
                if ((varclient_1716 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 14: {
                if ((varclient_1717 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 15: {
                if ((varclient_4742 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 16: {
                if ((varclient_5834 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
            case 17: {
                if ((varclient_5836 != -1 as obj)) {
                    int1 = (int1 + 1);
                };
                break;
            }
        };
        int2 = (int2 + 1);
    };
    if ((int1 == 0)) {
        return;
    };
    var int3 = (int0 - 15);
    if ((int3 > int1)) {
        return;
    };
    var int4 = -1;
    int4 = script6949(int3);
    if ((int4 != -1)) {
        IF_RESUME_PAUSEBUTTON(int4);
    };
    return;
}