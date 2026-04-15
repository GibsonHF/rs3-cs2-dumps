//
function script3216(int0: int, int1: unknown_int): void {
    if ((CREATE_CONNECT_REPLY() == -3)) {
        return;
    };
    if ((CREATE_REPLY() == -3)) {
        return;
    };
    if ((CREATE_EMAIL_VALIDATE_REPLY() == -3)) {
        return;
    };
    if (((int0 == 13) && (varclient_174 != 111))) {
        script7879();
        return;
    };
    if ((IF_GETHIDE(comp(1420, 187)) == false)) {
        return;
    };
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string1 = "";
    string1 = APPEND_CHAR(string1, int1);
    if ((varclient_174 == 111)) {
        switch (int0) {
            case 13:
            case 84: {
                if (((STRING_LENGTH(varclient_2563) > 0) && (int0 == 13))) {
                    varclient_2563 = "";
                } else {
                    IF_SETHIDE(true, comp(786, 16));
                    IF_SETHIDE(true, comp(786, 13));
                    varclient_174 = -1;
                    script1594();
                    return;
                };
                break;
            }
            case 96:
            case 97:
            case 98:
            case 99:
            case 102:
            case 103: {
                if ((STRING_INDEXOF_CHAR("124678", int1, 0) == -1)) {
                    varclient_1099 = script1553(int0, varclient_1099, varclient_2563);
                    script3218(comp(786, 14), comp(786, 15), comp(786, 16), varclient_2563, 111);
                    return;
                };
                break;
            }
        };
        if (((((STRING_LENGTH(varclient_2563) >= 12) && (int0 != 85)) && (int0 != 101)) && (int0 != 13))) {
            return;
        };
        if (((((STRING_INDEXOF_CHAR("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789  _-", int1, 0) != -1) || (int0 == 85)) || (int0 == 101)) || (int0 == 13))) {
            [varclient_2563, varclient_1099] = script802(varclient_1099, varclient_2563, 3, int0, int1);
            IF_SETTEXT(varclient_2563, comp(786, 15));
            script3218(comp(786, 14), comp(786, 15), comp(786, 16), varclient_2563, 111);
            script7855(0, 1);
        };
        return;
    };
    return;
}