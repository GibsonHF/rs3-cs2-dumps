//
function script12662(): void {
    var int0 = 210;
    if ((varbitplayer_33371 >= 5)) {
        stack(27789);
        stack(116523019);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_33371 >= 15)) {
        stack(27791);
        stack(116523018);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_33371 >= 35)) {
        stack(27793);
        stack(116523017);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_33371 >= 60)) {
        stack(27795);
        stack(116523016);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_33371 >= 100)) {
        stack(27797);
        stack(116523015);
        IF_SETGRAPHIC();
    };
    var int1 = MAX(1, SCALE(int0, 100, varbitplayer_33371));
    var int2 = SCALE(int1, int0, 28);
    IF_SETSIZE(41, int1, 0, 0, comp(1778, 3));
    IF_SETONVARTRANSMIT(callback(script12663, 6451, 1), comp(1778, 3));
    return;
}