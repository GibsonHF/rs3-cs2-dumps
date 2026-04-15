//
function script7717(int0: int, int1: unknown_int, int2: unknown_int, int3: component, int4: component, int5: int, int6: unknown_int): void {
    if ((IF_GETHIDE(int3) == true)) {
        return;
    };
    if ((CC_FIND(comp(1411, 0), int5) == 1)) {
        switch (int0) {
            case 84: {
                if ((STRING_LENGTH(varclient_2250) > 0)) {
                    script7716(int3, int4, int5, int6, varclient_2250);
                    script7208(varclient_2250, int3);
                    return;
                };
                if ((varclient_2236 == 7)) {
                    script7715(int2, int3, int4, int5, int6);
                    return;
                };
                break;
            }
            case 13: {
                if ((varclient_2236 == 7)) {
                    script7715(int2, int3, int4, int5, int6);
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
                if ((varclient_2236 == 7)) {
                    [varclient_2250, varclient_1029] = script7170(varclient_1029, varclient_2250, 6, int0, int1, varclient_2237);
                };
                break;
            }
        };
        IF_SETTEXT(ESCAPE(varclient_2250), int3);
        script7213(int3, int4);
    };
    return;
}