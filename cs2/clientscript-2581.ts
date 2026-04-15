//[proc,graphics_options_detailget]
function script2581(int0: struct): int {
    var int1 = struct_getparam(int0, 6800);
    var int2 = 0;
    if ((CLIENTOPTION_EXISTS(int1) == 0)) {
        switch (int0) {
            case 845: {
                return varclient_178;
            }
            case 33102: {
                return varclient_3698;
            }
        };
        return -1;
    };
    if ((CLIENTOPTION_CANMOD(int1) == 0)) {
        return -1;
    };
    switch (int1) {
        case 3: {
            if (((CLIENTOPTION_CANMOD(2) == 0) || (CLIENTOPTION_GET(2) == 0))) {
                return -1;
            };
            break;
        }
        case 13: {
            return ((CLIENTOPTION_GET(13) / 5) - 1);
        }
        case 14: {
            return ((CLIENTOPTION_GET(14) / 5) - 1);
        }
        case 11: {
            if ((enum_hasoutput(0, 488 as cs2enum, CLIENTOPTION_GET(11)) == 0)) {
                int2 = enum_getvalue(0, 0, 488 as cs2enum, -1);
                return enum_getreverseindex(0, 0, 488 as cs2enum, int2, 0);
            };
            return enum_getreverseindex(0, 0, 488 as cs2enum, CLIENTOPTION_GET(11), 0);
        }
        case 18: {
            return ((CLIENTOPTION_GET(18) - 50) / 10);
        }
        case 21: {
            if (((CLIENTOPTION_CANMOD(9) == 0) || (CLIENTOPTION_GET(9) == 0))) {
                return -1;
            };
            break;
        }
        case 7: {
            if (((CLIENTOPTION_CANMOD(8) == 0) || (CLIENTOPTION_GET(8) == 0))) {
                return -1;
            };
            break;
        }
    };
    return CLIENTOPTION_GET(int1);
}