//
function script5572(int0: unknown_int): void {
    var int1 = 1;
    var string0 = "0";
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = 1;
    switch (int0) {
        case 0: {
            int1 = varclient_1735;
            string0 = varclient_2467;
            int2 = comp(1180, 7);
            int3 = comp(1180, 95);
            int4 = comp(1180, 86);
            break;
        }
        case 1: {
            int1 = varclient_1736;
            string0 = varclient_2468;
            int2 = comp(1180, 8);
            int3 = comp(1180, 106);
            int4 = comp(1180, 97);
            int5 = -1;
            break;
        }
        case 2: {
            int1 = varclient_1737;
            string0 = varclient_2469;
            int2 = comp(1180, 12);
            int3 = comp(1180, 117);
            int4 = comp(1180, 108);
            break;
        }
        case 3: {
            int1 = varclient_1738;
            string0 = varclient_2470;
            int2 = comp(1180, 13);
            int3 = comp(1180, 128);
            int4 = comp(1180, 119);
            int5 = -1;
            break;
        }
        case 4: {
            int1 = varclient_1739;
            string0 = varclient_2471;
            int2 = comp(1180, 14);
            int3 = comp(1180, 139);
            int4 = comp(1180, 130);
            break;
        }
        case 5: {
            int1 = varclient_1740;
            string0 = varclient_2472;
            int2 = comp(1180, 15);
            int3 = comp(1180, 150);
            int4 = comp(1180, 141);
            int5 = -1;
            break;
        }
        case 6: {
            int1 = varclient_1741;
            string0 = varclient_2473;
            int2 = comp(1180, 16);
            int3 = comp(1180, 161);
            int4 = comp(1180, 152);
            break;
        }
        case 7: {
            int1 = varclient_1742;
            string0 = varclient_2474;
            int2 = comp(1180, 17);
            int3 = comp(1180, 172);
            int4 = comp(1180, 163);
            int5 = -1;
            break;
        }
        case 8: {
            int1 = varclient_1743;
            string0 = varclient_2475;
            int2 = comp(1180, 18);
            int3 = comp(1180, 183);
            int4 = comp(1180, 174);
            break;
        }
        case 9: {
            int1 = varclient_1744;
            string0 = varclient_2476;
            int2 = comp(1180, 19);
            int3 = comp(1180, 194);
            int4 = comp(1180, 185);
            int5 = -1;
            break;
        }
    };
    if (((int1 != 0) || (strcmp(string0, "0") == 0))) {
        return;
    };
    if ((strcmp(string0, "") == 0)) {
        IF_SETHIDE(true, int2);
    } else {
        IF_SETHIDE(false, int2);
        IF_SETTEXT(string0, int3);
        IF_SETTRANS(0, int4);
        IF_SETPOSITION((int5 * 150), -30, 1, 1, int2);
        IF_SETONTIMER(callback(script5573, int0), int2);
    };
    return;
}