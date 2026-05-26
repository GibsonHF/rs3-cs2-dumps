//
function script4285(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    varclient_2520 = IF_GETTEXT(int0);
    switch (int3) {
        case 84: {
            script4288();
            break;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            script4288();
            break;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if ((KEYHELD_SHIFT() == 0)) {
                return;
            };
            script1553(int3, varclient_1504, varclient_2520);
            break;
        }
        case 85: {
            if ((STRING_LENGTH(varclient_2520) > 0)) {
                varclient_2520 = SUBSTRING(varclient_2520, 0, (STRING_LENGTH(varclient_2520) - 1));
            };
            break;
        }
        default: {
            if ((STRING_LENGTH(varclient_2520) < 20)) {
                varclient_2520 = script74(varclient_2520, 0, int3, int2);
            };
            break;
        }
    };
    varclient_1504 = script1552(varclient_1504, varclient_2520, 26, int0, -1);
    IF_SETPOSITION(varclient_1504, IF_GETY(int4), 0, 0, int4);
    IF_SETTEXT(`${inttostring(STRING_LENGTH(varclient_2520), 10)}/20`, int1);
    if ((STRING_LENGTH(varclient_2520) >= 15)) {
        IF_SETCOLOUR(14483456, int1);
    } else {
        IF_SETCOLOUR(2039065, int1);
    };
    IF_SETTEXT(varclient_2520, int0);
    return;
}