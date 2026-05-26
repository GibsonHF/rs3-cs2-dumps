//
function script11061(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((CC_FIND(49348635, int1) == 1)) {
        if ((int0 == 1)) {
            CC_SETGRAPHIC(8322);
        } else if ((int0 == 0)) {
            CC_SETGRAPHIC(8321);
        } else {
            if ((int5 != -1)) {
                IF_SETNPCMODEL(int5, 49348648);
            };
            if ((CC_FIND(49348646, 0) == 1)) {
                CC_SETHIDE(0);
                CC_SETMODEL(int4);
                CC_SETMODELANIM(int3);
            };
            IF_SETMODELANIM(int2, 49348648);
        };
    };
    return;
}