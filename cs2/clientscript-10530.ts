//
function script10530(int0: int, int1: int): [int, int, int] {
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
            if ((int1 == 1)) {
                int2 = varbitclient_19179;
                int3 = varbitclient_19183;
                int4 = varbitclient_19180;
            } else {
                int2 = varbitclient_19263;
                int3 = varbitclient_19267;
                int4 = varbitclient_19264;
            };
            break;
        }
        case 7: {
            if ((int1 == 1)) {
                int2 = varbitclient_19771;
                int3 = varbitclient_19775;
                int4 = varbitclient_19772;
            } else {
                int2 = varbitclient_19855;
                int3 = varbitclient_19859;
                int4 = varbitclient_19856;
            };
            break;
        }
        case 12: {
            if ((int1 == 1)) {
                int2 = varbitclient_31586;
                int3 = varbitclient_31590;
                int4 = varbitclient_31587;
            } else {
                int2 = varbitclient_31670;
                int3 = varbitclient_31674;
                int4 = varbitclient_31671;
            };
            break;
        }
        case 13: {
            if ((int1 == 1)) {
                int2 = varbitclient_32064;
                int3 = varbitclient_32068;
                int4 = varbitclient_32065;
            } else {
                int2 = varbitclient_32148;
                int3 = varbitclient_32152;
                int4 = varbitclient_32149;
            };
            break;
        }
        case 8: {
            if ((int1 == 1)) {
                int2 = varbitclient_19475;
                int3 = varbitclient_19479;
                int4 = varbitclient_19476;
            } else {
                int2 = varbitclient_19559;
                int3 = varbitclient_19563;
                int4 = varbitclient_19560;
            };
            break;
        }
        case 9:
        case 10: {
            if ((int1 == 1)) {
                int2 = varclient_3143;
                int3 = varclient_3147;
                int4 = varclient_3144;
            } else {
                int2 = varclient_5581;
                int3 = varclient_5585;
                int4 = varclient_5582;
            };
            break;
        }
    };
    int2 = (int2 - 1);
    int3 = (int3 - 1);
    return [int2, int3, int4];
}