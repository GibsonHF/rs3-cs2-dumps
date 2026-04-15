//
function script14238(int0: int): unknown_int {
    if ((IF_GETHIDE(comp(276, 27)) == true)) {
        return -1;
    };
    var int1 = enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443);
    var int2 = -1;
    switch (int1) {
        case 9:
        case 14: {
            if ((int1 == int0)) {
                return 1;
            };
            break;
        }
        case 20:
        case 21:
        case 25:
        case 46: {
            if ((varclient_6910 == 1)) {
                switch (int1) {
                    case 20: {
                        int2 = 15;
                        break;
                    }
                    case 21: {
                        int2 = 16;
                        break;
                    }
                    case 25: {
                        int2 = 27;
                        break;
                    }
                    case 46: {
                        int2 = 45;
                        break;
                    }
                };
                if ((int0 == int2)) {
                    return 1;
                };
            };
            break;
        }
    };
    return 0;
}