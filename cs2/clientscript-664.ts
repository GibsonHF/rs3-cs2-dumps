//[proc,lore_updateicon_v2]
function script664(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int0 == -1)) {
        return;
    };
    if ((IF_GETHIDE(int0) == 0)) {
        if (((int4 != -1 as obj) && (script12914(int4) < int5))) {
            if ((varplayer_4824 == int4)) {
                if ((varbitplayer_25412 < int5)) {
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
        if ((STAT_BASE(23) < int3)) {
            stack(int2);
            stack(int0);
            IF_SETGRAPHIC();
        } else {
            stack(int1);
            stack(int0);
            IF_SETGRAPHIC();
        };
    };
    return;
}