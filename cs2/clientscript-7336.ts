//
function script7336(int0: unknown_int): void {
    var string0 = "";
    var int1 = -1 as cs2enum;
    switch (int0) {
        case 0: {
            int1 = 7117 as cs2enum;
            IF_SETTEXT("Upgrade Bar", comp(1373, 147));
            break;
        }
        case 1: {
            int1 = 7118 as cs2enum;
            IF_SETTEXT("Upgrade Office", comp(1373, 147));
            break;
        }
        case 2: {
            int1 = 7119 as cs2enum;
            IF_SETTEXT("Upgrade Workshop", comp(1373, 147));
            break;
        }
        case 5: {
            int1 = 7148 as cs2enum;
            IF_SETTEXT("Upgrade Warehouse", comp(1373, 147));
            break;
        }
        case 4: {
            int1 = 7146 as cs2enum;
            IF_SETTEXT("Upgrade Shipwright", comp(1373, 147));
            break;
        }
        case 3: {
            int1 = 7147 as cs2enum;
            IF_SETTEXT("Upgrade Lodgings", comp(1373, 147));
            break;
        }
        case 10: {
            int1 = 7149 as cs2enum;
            IF_SETTEXT("Upgrade Icon Hotspot 1", comp(1373, 147));
            break;
        }
        case 11: {
            int1 = 7149 as cs2enum;
            IF_SETTEXT("Upgrade Icon Hotspot 2", comp(1373, 147));
            break;
        }
        case 12: {
            int1 = 7149 as cs2enum;
            IF_SETTEXT("Upgrade Icon Hotspot 3", comp(1373, 147));
            break;
        }
        case 6: {
            int1 = 7150 as cs2enum;
            IF_SETTEXT("Upgrade Totem Hotspot 1", comp(1373, 147));
            break;
        }
        case 7: {
            int1 = 7150 as cs2enum;
            IF_SETTEXT("Upgrade Totem Hotspot 2", comp(1373, 147));
            break;
        }
        case 8: {
            int1 = 7150 as cs2enum;
            IF_SETTEXT("Upgrade Totem Hotspot 3", comp(1373, 147));
            break;
        }
        case 9: {
            int1 = 7150 as cs2enum;
            IF_SETTEXT("Upgrade Totem Hotspot 4", comp(1373, 147));
            break;
        }
        case 13: {
            int1 = 7151 as cs2enum;
            IF_SETTEXT("Upgrade Portal", comp(1373, 147));
            break;
        }
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    int4 = (int4 + script7337(0, int0, int1, int4));
    int4 = (int4 + script7337(1, int0, int1, int4));
    int4 = (int4 + script7337(2, int0, int1, int4));
    int4 = (int4 + script7337(3, int0, int1, int4));
    int4 = (int4 + script7337(4, int0, int1, int4));
    int4 = (int4 + script7337(5, int0, int1, int4));
    int4 = (int4 + script7337(6, int0, int1, int4));
    int4 = (int4 + script7337(7, int0, int1, int4));
    int4 = (int4 + script7337(8, int0, int1, int4));
    int4 = (int4 + script7337(9, int0, int1, int4));
    int4 = (int4 + script7337(10, int0, int1, int4));
    int4 = (int4 + script7337(11, int0, int1, int4));
    int4 = (int4 + script7337(12, int0, int1, int4));
    IF_SETSCROLLSIZE(0, (int4 * 90), comp(1373, 10));
    if (((int4 * 90) > 180)) {
        IF_SETHIDE(false, comp(1373, 9));
    } else {
        IF_SETHIDE(true, comp(1373, 9));
    };
    script7791(comp(1373, 9), comp(1373, 10));
    return;
}