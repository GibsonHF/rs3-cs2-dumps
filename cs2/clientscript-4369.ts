//
function script4369(int0: component, int1: unknown_int, int2: int, int3: component): void {
    varclient_2539 = IF_GETTEXT(int0);
    switch (int2) {
        case 84: {
            script4372(1);
            break;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            script4372(1);
            break;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if ((KEYHELD_SHIFT() == false)) {
                return;
            };
            script1553(int2, varclient_1498, varclient_2539);
            break;
        }
        case 85: {
            if ((STRING_LENGTH(varclient_2539) > 0)) {
                varclient_2539 = SUBSTRING(varclient_2539, 0, (STRING_LENGTH(varclient_2539) - 1));
            };
            break;
        }
        default: {
            if (((int2 == 67) && (KEYHELD_CTRL() == true))) {
                script4367();
                return;
            };
            if ((STRING_LENGTH(varclient_2539) < 13)) {
                varclient_2539 = script74(varclient_2539, 0, int2, int1);
            };
            break;
        }
    };
    varclient_1498 = script1552(varclient_1498, varclient_2539, 26 as fontmetrics, int0, -1);
    IF_SETPOSITION(varclient_1498, IF_GETY(int3), 0, 0, int3);
    IF_SETTEXT(varclient_2539, int0);
    return;
}