//
function script18679(int0: int, int1: int): [int, int, int] {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as struct;
    var int6 = -1 as cs2enum;
    switch (int0) {
        case 1:
        case 0:
        case 2:
        case 3:
        case 4:
        case 11:
        case 15:
        case 17:
        case 16:
        case 14: {
            int6 = script8698(int0);
            if ((int6 != -1 as cs2enum)) {
                int5 = enum_getvalue(0, 73, int6, int1);
                if ((int5 == -1 as struct)) {
                    int5 = enum_getvalue(0, 73, 7712 as cs2enum, int1);
                };
                if ((int5 != -1 as struct)) {
                    int4 = struct_getparam(int5, 3488);
                    int2 = struct_getparam(int5, 3486);
                    int3 = struct_getparam(int5, 3487);
                };
            };
            break;
        }
        case 6: {
            if ((int1 == 37)) {
                int2 = varbitclient_36537;
                int3 = varbitclient_36541;
                int4 = varbitclient_36538;
            } else {
                int2 = varbitclient_36545;
                int3 = varbitclient_36549;
                int4 = varbitclient_36546;
            };
            break;
        }
        case 7: {
            if ((int1 == 37)) {
                int2 = varbitclient_36601;
                int3 = varbitclient_36605;
                int4 = varbitclient_36602;
            } else {
                int2 = varbitclient_36609;
                int3 = varbitclient_36613;
                int4 = varbitclient_36610;
            };
            break;
        }
        case 12: {
            if ((int1 == 37)) {
                int2 = varbitclient_36665;
                int3 = varbitclient_36669;
                int4 = varbitclient_36666;
            } else {
                int2 = varbitclient_36673;
                int3 = varbitclient_36677;
                int4 = varbitclient_36674;
            };
            break;
        }
        case 13: {
            if ((int1 == 37)) {
                int2 = varbitclient_36729;
                int3 = varbitclient_36733;
                int4 = varbitclient_36730;
            } else {
                int2 = varbitclient_36737;
                int3 = varbitclient_36741;
                int4 = varbitclient_36738;
            };
            break;
        }
        case 8: {
            if ((int1 == 37)) {
                int2 = varbitclient_36473;
                int3 = varbitclient_36477;
                int4 = varbitclient_36474;
            } else {
                int2 = varbitclient_36481;
                int3 = varbitclient_36485;
                int4 = varbitclient_36482;
            };
            break;
        }
        case 9:
        case 10: {
            if ((int1 == 37)) {
                int2 = varclient_6122;
                int3 = varclient_6126;
                int4 = varclient_6123;
            } else {
                int2 = varclient_6130;
                int3 = varclient_6134;
                int4 = varclient_6131;
            };
            break;
        }
    };
    int2 = (int2 - 1);
    int3 = (int3 - 1);
    return [int2, int3, int4];
}