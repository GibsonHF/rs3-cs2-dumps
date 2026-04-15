//
function script2273(int0: component, int1: unknown_int, int2: unknown_int, int3: int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int, int11: unknown_int, int12: unknown_int): void {
    if (((STAT(6 as stat) < int3) && ((int4 == 0) || (STAT_BASE(6 as stat) < int3)))) {
        if ((varbitplayer_3043 == 1)) {
            if ((varplayer_1185 < int3)) {
                stack(int2);
                stack(int0);
                IF_SETGRAPHIC();
                return;
            };
        } else {
            stack(int2);
            stack(int0);
            IF_SETGRAPHIC();
            return;
        };
    };
    if ((varplayer_1101 == -1 as coordgrid)) {
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
        return;
    };
    stack(int1);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}