//
function script11061(int0: unknown_int, int1: int, int2: seq, int3: seq, int4: model, int5: npc): void {
    if ((CC_FIND(comp(753, 27), int1) == 1)) {
        if ((int0 == 1)) {
            CC_SETGRAPHIC(8322 as graphic);
        } else if ((int0 == 0)) {
            CC_SETGRAPHIC(8321 as graphic);
        } else {
            if ((int5 != -1 as npc)) {
                IF_SETNPCMODEL(int5, comp(753, 40));
            };
            if ((CC_FIND(comp(753, 38), 0) == 1)) {
                CC_SETHIDE(false);
                CC_SETMODEL(int4);
                CC_SETMODELANIM(int3);
            };
            IF_SETMODELANIM(int2, comp(753, 40));
        };
    };
    return;
}