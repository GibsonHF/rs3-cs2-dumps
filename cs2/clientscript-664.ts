//[proc,lore_updateicon_v2]
function script664(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((IF_GETHIDE(int0) == false)) {
        if (((int4 != -1 as obj) && (script12914(int4) < int5))) {
            if ((varplayer_4824 == int4)) {
                if ((varbitplayer_25412 < int5)) {
                    IF_SETGRAPHIC(int2, int0);
                    return;
                };
            } else {
                IF_SETGRAPHIC(int2, int0);
                return;
            };
        };
        if ((STAT_BASE(23 as stat) < int3)) {
            IF_SETGRAPHIC(int2, int0);
        } else {
            IF_SETGRAPHIC(int1, int0);
        };
    };
    return;
}