//[clientscript,clan_motto_text_input]
function script4379(int0: component, int1: component, int2: unknown_int, int3: int, int4: component): void {
    varclient_2538 = IF_GETTEXT(int0);
    switch (int3) {
        case 84: {
            script4382();
            break;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            script5456();
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
            script1553(int3, varclient_1496, varclient_2538);
            break;
        }
        case 85: {
            if ((STRING_LENGTH(varclient_2538) > 0)) {
                varclient_2538 = SUBSTRING(varclient_2538, 0, (STRING_LENGTH(varclient_2538) - 1));
            };
            break;
        }
        default: {
            if ((STRING_LENGTH(varclient_2538) < 80)) {
                varclient_2538 = script74(varclient_2538, 0, int3, int2);
            };
            break;
        }
    };
    varclient_1496 = script1552(varclient_1496, varclient_2538, 26 as fontmetrics, int0, -1);
    IF_SETPOSITION(varclient_1496, IF_GETY(int4), 0, 0, int4);
    IF_SETTEXT(`${inttostring(STRING_LENGTH(varclient_2538), 10)}/80`, int1);
    if ((STRING_LENGTH(varclient_2538) >= 70)) {
        IF_SETCOLOUR(14483456, int1);
    } else {
        IF_SETCOLOUR(2039065, int1);
    };
    IF_SETTEXT(varclient_2538, int0);
    return;
}