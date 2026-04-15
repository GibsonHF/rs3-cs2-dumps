//
function script18123(): void {
    if ((IF_HASSUBOVERLAY(comp(1477, 744), 1264 as overlayinterface) == 1)) {
        if ((IF_GETHIDE(comp(1264, 41)) == false)) {
            script18399();
        } else {
            IF_TRIGGEROP(comp(1264, 31), -1, 1);
        };
        return;
    };
    var int0 = 0;
    var int1 = script3418(varplayer_11457);
    if ((script16229(varplayer_11457, int1) == 1)) {
        return;
    };
    switch (varplayer_11457) {
        case 3920: {
            switch (int1) {
                case 0: {
                    if ((IF_GETHIDE(comp(891, 3)) == false)) {
                        IF_TRIGGEROP(comp(891, 8), -1, 1);
                        return;
                    };
                    break;
                }
                case 2:
                case 6:
                case 7:
                case 9:
                case 1: {
                    if ((IF_GETHIDE(comp(891, 3)) == false)) {
                        IF_TRIGGEROP(comp(891, 8), -1, 1);
                        return;
                    };
                    break;
                }
                case 3: {
                    if ((IF_HASSUBOVERLAY(comp(853, 9), 1510 as overlayinterface) == 1)) {
                        IF_TRIGGEROP(comp(1510, 5), -1, 1);
                        return;
                    };
                    if ((IF_HASSUBOVERLAY(comp(853, 9), 852 as overlayinterface) == 1)) {
                        int0 = enum_getreverseindex(9, 0, 16362 as cs2enum, 55836694, 0);
                        IF_TRIGGEROP(comp(853, 43), int0, 1);
                        return;
                    };
                    break;
                }
                case 4: {
                    if ((IF_GETHIDE(comp(891, 6)) == false)) {
                        IF_TRIGGEROP(comp(891, 47), -1, 1);
                        return;
                    };
                    if ((IF_GETHIDE(comp(891, 3)) == false)) {
                        IF_TRIGGEROP(comp(891, 8), -1, 1);
                        return;
                    };
                    if ((IF_GETHIDE(comp(828, 9)) == false)) {
                        IF_SETHIDE(true, comp(828, 9));
                        return;
                    };
                    break;
                }
            };
            break;
        }
        case 8256: {
            if ((script18124(int1) == 1)) {
                return;
            };
            break;
        }
    };
    if ((CC_FIND(script11777(varplayer_11457, int1), (6 - 1)) == 1)) {
        CC_TRIGGEROP(1);
    };
    return;
}