//
function script3185(int0: int, int1: unknown_int, int2: component): void {
    switch (int0) {
        case 84: {
            script3183();
            return;
        }
        case 13: {
            script3180();
            return;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            varclient_1097 = script1553(int0, varclient_1097, varclient_2478);
            script1879(comp(914, 3), comp(914, 4), varclient_2478);
            return;
        }
    };
    if ((((CHAR_ISPRINTABLE(int1) == 1) || (int0 == 85)) || (int0 == 101))) {
        if (((int0 == -1) && (STRING_LENGTH(REMOVETAGS(APPEND_CHAR("", int1))) == 0))) {
            return;
        };
        [varclient_2478, varclient_1097] = script802(varclient_1097, varclient_2478, 2, int0, int1);
        IF_SETTEXT(varclient_2478, int2);
        script1879(comp(914, 3), comp(914, 4), varclient_2478);
    };
    return;
}