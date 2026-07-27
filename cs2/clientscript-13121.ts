//
function script13121(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((varclient_2873 != 11)) {
        return;
    };
    if ((IF_GETHIDE(int3) == true)) {
        return;
    };
    switch (int0) {
        case 84: {
            if ((varclient_2236 == 8)) {
                if ((script13749() == 0)) {
                    script7206(int2, int3, int4, int5, int6);
                };
                return;
            };
            if ((varclient_2236 == 10)) {
                if ((script13749() == 1)) {
                    script1594();
                };
                return;
            };
            if ((STRING_LENGTH(varclient_2250) > 0)) {
                script10519(int3, int4, int5, int6, varclient_2250);
                return;
            };
            if (((varclient_2236 == 7) || (varclient_2236 == 11))) {
                if ((int7 == 1)) {
                    script12426(int2, int3, int4, int5, int6);
                } else {
                    script7206(int2, int3, int4, int5, int6);
                };
                return;
            };
            break;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            switch (varclient_2236) {
                case 8:
                case 10: {
                    if ((strcmp(varclient_2250, "") != 0)) {
                        varclient_2250 = "";
                        varclient_1029 = script1553(102, varclient_1029, varclient_2250);
                        return;
                    };
                    break;
                }
            };
            if ((int7 == 1)) {
                script12426(int2, int3, int4, int5, int6);
            } else {
                script7206(int2, int3, int4, int5, int6);
            };
            return;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if ((KEYHELD_SHIFT() == false)) {
                return;
            };
            varclient_1029 = script1553(int0, varclient_1029, varclient_2250);
            break;
        }
        default: {
            var int1 = script10523(int3, int1);
            switch (varclient_2236) {
                case 7: {
                    [varclient_2250, varclient_1029] = script7170(varclient_1029, varclient_2250, 6, int0, int1, varclient_2237);
                    break;
                }
                case 11: {
                    [varclient_2250, varclient_1029] = script7170(varclient_1029, varclient_2250, 10, int0, int1, varclient_2237);
                    break;
                }
                case 8:
                case 10: {
                    [varclient_2250, varclient_1029] = script7170(varclient_1029, varclient_2250, 0, int0, int1, varclient_2237);
                    break;
                }
                case 9: {
                    [varclient_2250, varclient_1029] = script7170(varclient_1029, varclient_2250, 8, int0, int1, varclient_2237);
                    break;
                }
            };
            break;
        }
    };
    IF_SETTEXT(ESCAPE(varclient_2250), int3);
    script7213(int3, int4);
    return;
}