//
function script5573(int0: number): void {
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    var int4 = 1;
    switch (int0) {
        case 0: {
            int1 = varclient_1735;
            int2 = 77332487;
            int3 = 77332566;
            break;
        }
        case 1: {
            int1 = varclient_1736;
            int2 = 77332488;
            int3 = 77332577;
            int4 = -1;
            break;
        }
        case 2: {
            int1 = varclient_1737;
            int2 = 77332492;
            int3 = 77332588;
            break;
        }
        case 3: {
            int1 = varclient_1738;
            int2 = 77332493;
            int3 = 77332599;
            int4 = -1;
            break;
        }
        case 4: {
            int1 = varclient_1739;
            int2 = 77332494;
            int3 = 77332610;
            break;
        }
        case 5: {
            int1 = varclient_1740;
            int2 = 77332495;
            int3 = 77332621;
            int4 = -1;
            break;
        }
        case 6: {
            int1 = varclient_1741;
            int2 = 77332496;
            int3 = 77332632;
            break;
        }
        case 7: {
            int1 = varclient_1742;
            int2 = 77332497;
            int3 = 77332643;
            int4 = -1;
            break;
        }
        case 8: {
            int1 = varclient_1743;
            int2 = 77332498;
            int3 = 77332654;
            break;
        }
        case 9: {
            int1 = varclient_1744;
            int2 = 77332499;
            int3 = 77332665;
            int4 = -1;
            break;
        }
    };
    var int5 = SCALE(int1, 200, 100);
    var int6 = (-30 - SCALE(int5, 100, 205));
    var int7 = SCALE(int5, 100, 255);
    IF_SETPOSITION((int4 * 150), int6, 1, 1, int2);
    IF_SETTRANS(int7, int3);
    var int8 = 0;
    switch (int0) {
        case 0: {
            varclient_1735 = (varclient_1735 + 1);
            if ((varclient_1735 > 200)) {
                IF_SETHIDE(1, int2);
                IF_SETONTIMER(callback(), int2);
            };
            break;
        }
        case 1: {
            varclient_1736 = (varclient_1736 + 1);
            if ((varclient_1736 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 2: {
            varclient_1737 = (varclient_1737 + 1);
            if ((varclient_1737 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 3: {
            varclient_1738 = (varclient_1738 + 1);
            if ((varclient_1738 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 4: {
            varclient_1739 = (varclient_1739 + 1);
            if ((varclient_1739 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 5: {
            varclient_1740 = (varclient_1740 + 1);
            if ((varclient_1740 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 6: {
            varclient_1741 = (varclient_1741 + 1);
            if ((varclient_1741 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 7: {
            varclient_1742 = (varclient_1742 + 1);
            if ((varclient_1742 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 8: {
            varclient_1743 = (varclient_1743 + 1);
            if ((varclient_1743 > 200)) {
                int8 = 1;
            };
            break;
        }
        case 9: {
            varclient_1744 = (varclient_1744 + 1);
            if ((varclient_1744 > 200)) {
                int8 = 1;
            };
            break;
        }
    };
    if ((int8 == 1)) {
        IF_SETHIDE(1, int2);
        IF_SETONTIMER(callback(), int2);
    };
    return;
}