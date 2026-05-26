//
function script2273(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number): void {
    if (((STAT(6) < int3) && ((int4 == 0) || (STAT_BASE(6) < int3)))) {
        if ((varbitplayer_3043 == 1)) {
            if ((varplayer_1185 < int3)) {
                IF_SETGRAPHIC(int2, int0);
                return;
            };
        } else {
            IF_SETGRAPHIC(int2, int0);
            return;
        };
    };
    if ((varplayer_1101 == -1 as coordgrid)) {
        IF_SETGRAPHIC(int2, int0);
        return;
    };
    IF_SETGRAPHIC(int1, int0);
    return;
}