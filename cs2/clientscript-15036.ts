//
function script15036(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int2 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 215));
    };
    if ((int4 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 147));
        IF_SETTEXT("Loading...", comp(105, 150));
        script20874();
    };
    if ((int3 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 140));
    };
    if ((int0 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 170));
    };
    if ((int1 == 1)) {
        IF_SETTEXT("Loading...", comp(105, 185));
    };
    if ((int5 == 1)) {
        IF_SETONTIMER(callback(), comp(105, 141));
        if ((varplayer_135 == -1)) {
            IF_SETTEXT("", comp(105, 141));
        } else {
            IF_SETTEXT("Loading...", comp(105, 141));
        };
    };
    return;
}