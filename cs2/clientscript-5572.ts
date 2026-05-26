//
function script5572(int0: number): void {
    var int1 = 1;
    var string0 = "0";
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 1;
    switch (int0) {
        case 0: {
            int1 = varclient_1735;
            string0 = varclient_2467;
            int2 = 77332487;
            int3 = 77332575;
            int4 = 77332566;
            break;
        }
        case 1: {
            int1 = varclient_1736;
            string0 = varclient_2468;
            int2 = 77332488;
            int3 = 77332586;
            int4 = 77332577;
            int5 = -1;
            break;
        }
        case 2: {
            int1 = varclient_1737;
            string0 = varclient_2469;
            int2 = 77332492;
            int3 = 77332597;
            int4 = 77332588;
            break;
        }
        case 3: {
            int1 = varclient_1738;
            string0 = varclient_2470;
            int2 = 77332493;
            int3 = 77332608;
            int4 = 77332599;
            int5 = -1;
            break;
        }
        case 4: {
            int1 = varclient_1739;
            string0 = varclient_2471;
            int2 = 77332494;
            int3 = 77332619;
            int4 = 77332610;
            break;
        }
        case 5: {
            int1 = varclient_1740;
            string0 = varclient_2472;
            int2 = 77332495;
            int3 = 77332630;
            int4 = 77332621;
            int5 = -1;
            break;
        }
        case 6: {
            int1 = varclient_1741;
            string0 = varclient_2473;
            int2 = 77332496;
            int3 = 77332641;
            int4 = 77332632;
            break;
        }
        case 7: {
            int1 = varclient_1742;
            string0 = varclient_2474;
            int2 = 77332497;
            int3 = 77332652;
            int4 = 77332643;
            int5 = -1;
            break;
        }
        case 8: {
            int1 = varclient_1743;
            string0 = varclient_2475;
            int2 = 77332498;
            int3 = 77332663;
            int4 = 77332654;
            break;
        }
        case 9: {
            int1 = varclient_1744;
            string0 = varclient_2476;
            int2 = 77332499;
            int3 = 77332674;
            int4 = 77332665;
            int5 = -1;
            break;
        }
    };
    if (((int1 != 0) || (strcmp(string0, "0") == 0))) {
        return;
    };
    if ((strcmp(string0, "") == 0)) {
        IF_SETHIDE(1, int2);
    } else {
        IF_SETHIDE(0, int2);
        IF_SETTEXT(string0, int3);
        IF_SETTRANS(0, int4);
        IF_SETPOSITION((int5 * 150), -30, 1, 1, int2);
        IF_SETONTIMER(callback(script5573, int0), int2);
    };
    return;
}