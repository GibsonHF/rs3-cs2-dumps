//
function script18123(): void {
    if ((IF_HASSUBOVERLAY(96797416, 1264) == 1)) {
        if ((IF_GETHIDE(82837545) == 0)) {
            script18399();
        } else {
            IF_TRIGGEROP(82837535, -1, 1);
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
                    if ((IF_GETHIDE(58392579) == 0)) {
                        IF_TRIGGEROP(58392584, -1, 1);
                        return;
                    };
                    break;
                }
                case 2:
                case 6:
                case 7:
                case 9:
                case 1: {
                    if ((IF_GETHIDE(58392579) == 0)) {
                        IF_TRIGGEROP(58392584, -1, 1);
                        return;
                    };
                    break;
                }
                case 3: {
                    if ((IF_HASSUBOVERLAY(55902217, 1510) == 1)) {
                        IF_TRIGGEROP(98959365, -1, 1);
                        return;
                    };
                    if ((IF_HASSUBOVERLAY(55902217, 852) == 1)) {
                        int0 = enum_getreverseindex(9, 0, 16362, 55836694, 0);
                        IF_TRIGGEROP(55902251, int0, 1);
                        return;
                    };
                    break;
                }
                case 4: {
                    if ((IF_GETHIDE(58392582) == 0)) {
                        IF_TRIGGEROP(58392623, -1, 1);
                        return;
                    };
                    if ((IF_GETHIDE(58392579) == 0)) {
                        IF_TRIGGEROP(58392584, -1, 1);
                        return;
                    };
                    if ((IF_GETHIDE(54263817) == 0)) {
                        IF_SETHIDE(1, 54263817);
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