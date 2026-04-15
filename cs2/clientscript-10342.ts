//
function script10342(int0: component, int1: component, int2: unknown_int, int3: int, int4: component): void {
    varclient_4499 = IF_GETTEXT(int0);
    switch (int3) {
        case 84: {
            script10346();
            break;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            varclient_4499 = "";
            script10346();
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
            script1553(int3, varclient_4500, varclient_4499);
            break;
        }
        case 85: {
            if ((STRING_LENGTH(varclient_4499) > 0)) {
                varclient_4499 = SUBSTRING(varclient_4499, 0, (STRING_LENGTH(varclient_4499) - 1));
            };
            break;
        }
        default: {
            if ((STRING_LENGTH(varclient_4499) < 12)) {
                varclient_4499 = script74(varclient_4499, 9, int3, int2);
            };
            break;
        }
    };
    varclient_4500 = script1552(varclient_4500, varclient_4499, 26 as fontmetrics, int0, -1);
    IF_SETPOSITION(varclient_4500, IF_GETY(int4), 0, 0, int4);
    IF_SETTEXT(`${inttostring(STRING_LENGTH(varclient_4499), 10)}/12`, int1);
    if ((STRING_LENGTH(varclient_4499) >= 10)) {
        IF_SETCOLOUR(14483456, int1);
    } else {
        IF_SETCOLOUR(2039065, int1);
    };
    IF_SETTEXT(varclient_4499, int0);
    return;
}