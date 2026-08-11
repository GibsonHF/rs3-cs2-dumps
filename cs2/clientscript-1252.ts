//
function script1252(int0: number, int1: number, int2: number): void {
    if ((varclient_1412 == true)) {
        return;
    };
    var int3 = 4194354;
    var int4 = 4194355;
    var int5 = 4194356;
    switch (int0) {
        case 13: {
            return;
        }
        case 84: {
            varclient_1412 = 1;
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
            IF_SETHIDE(false, comp(64, 86));  // no_displayname_v2:confirm_button_disabled
        } else {
            IF_SETHIDE(true, comp(64, 86));  // no_displayname_v2:confirm_button_disabled
        };
        script3218(int3, int4, int5, varclient_2563, 111);
        IF_SETHIDE(true, comp(64, 31));  // no_displayname_v2:name_icon_layer
        IF_SETHIDE(true, comp(64, 7));  // no_displayname_v2:information_layer
    };
    return;
}