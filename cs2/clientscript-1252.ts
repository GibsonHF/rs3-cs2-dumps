//
function script1252(int0: int, int1: unknown_int, int2: unknown_int): void {
    if ((varclient_1412 == true)) {
        return;
    };
    var int3 = comp(64, 50);
    var int4 = comp(64, 51);
    var int5 = comp(64, 52);
    switch (int0) {
        case 13: {
            return;
        }
        case 84: {
            varclient_1412 = true;
            return;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            varclient_1099 = script1553(int0, varclient_1099, varclient_2563);
            script3218(int3, int4, int5, varclient_2563, 111);
            return;
        }
    };
    if ((((STRING_LENGTH(varclient_2563) >= 12) && (int0 != 85)) && (int0 != 101))) {
        return;
    };
    if ((((STRING_INDEXOF_CHAR("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789  _-", int1, 0) != -1) || (int0 == 85)) || (int0 == 101))) {
        [varclient_2563, varclient_1099] = script802(varclient_1099, varclient_2563, 2, int0, int1);
        IF_SETTEXT(varclient_2563, int4);
        if ((STRING_LENGTH(varclient_2563) <= 0)) {
            IF_SETHIDE(false, comp(64, 86));
        } else {
            IF_SETHIDE(true, comp(64, 86));
        };
        script3218(int3, int4, int5, varclient_2563, 111);
        IF_SETHIDE(true, comp(64, 31));
        IF_SETHIDE(true, comp(64, 7));
    };
    return;
}