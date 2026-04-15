//
function script5573(int0: unknown_int): void {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 1;
    switch (int0) {
        case 0: {
            int1 = varclient_1735;
            int2 = comp(1180, 7);
            int3 = comp(1180, 86);
            break;
        }
        case 1: {
            int1 = varclient_1736;
            int2 = comp(1180, 8);
            int3 = comp(1180, 97);
            int4 = -1;
            break;
        }
        case 2: {
            int1 = varclient_1737;
            int2 = comp(1180, 12);
            int3 = comp(1180, 108);
            break;
        }
        case 3: {
            int1 = varclient_1738;
            int2 = comp(1180, 13);
            int3 = comp(1180, 119);
            int4 = -1;
            break;
        }
        case 4: {
            int1 = varclient_1739;
            int2 = comp(1180, 14);
            int3 = comp(1180, 130);
            break;
        }
        case 5: {
            int1 = varclient_1740;
            int2 = comp(1180, 15);
            int3 = comp(1180, 141);
            int4 = -1;
            break;
        }
        case 6: {
            int1 = varclient_1741;
            int2 = comp(1180, 16);
            int3 = comp(1180, 152);
            break;
        }
        case 7: {
            int1 = varclient_1742;
            int2 = comp(1180, 17);
            int3 = comp(1180, 163);
            int4 = -1;
            break;
        }
        case 8: {
            int1 = varclient_1743;
            int2 = comp(1180, 18);
            int3 = comp(1180, 174);
            break;
        }
        case 9: {
            int1 = varclient_1744;
            int2 = comp(1180, 19);
            int3 = comp(1180, 185);
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
                IF_SETHIDE(true, int2);
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
        IF_SETHIDE(true, int2);
        IF_SETONTIMER(callback(), int2);
    };
    return;
}