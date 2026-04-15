//
function script5588(int0: int, int1: int): void {
    if ((((int0 == 137) && (script6431() == true)) && (script15532(0) == 1))) {
        return;
    };
    var int2 = enum_getvalue(0, 0, 13321 as cs2enum, int0);
    if ((int2 != -1)) {
        script8792();
        switch (int2) {
            case 9: {
                if ((IF_GETHIDE(comp(1477, 805)) == true)) {
                    script8290(1);
                };
                script8182();
                break;
            }
            case 1: {
                if ((varbitplayer_40127 == 0)) {
                    script20343(int2, int1);
                };
                break;
            }
            case 12: {
                if ((varplayer_12314 <= 0)) {
                    return;
                };
                script20343(int2, int1);
                break;
            }
            default: {
                script20343(int2, int1);
                break;
            }
        };
    } else {
        if ((varbitplayer_38842 == 1)) {
            switch (int0) {
                case 6: {
                    var int0 = varbitclient_52489;
                    break;
                }
                case 34: {
                    int0 = varbitclient_52490;
                    break;
                }
            };
        };
        script8159(int0, 0);
    };
    script17044(comp(1431, 13));
    return;
}