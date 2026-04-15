//[proc,lore_updateicon_v2]
function script664(int0: component, int1: unknown_int, int2: unknown_int, int3: int, int4: obj, int5: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((IF_GETHIDE(int0) == false)) {
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
        if ((STAT_BASE(23 as stat) < int3)) {
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