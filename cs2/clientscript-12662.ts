//
function script12662(): void {
    var int0 = 210;
    if ((varbitplayer_33371 >= 5)) {
        IF_SETGRAPHIC(27789, 116523019);
    };
    if ((varbitplayer_33371 >= 15)) {
        IF_SETGRAPHIC(27791, 116523018);
    };
    if ((varbitplayer_33371 >= 35)) {
        IF_SETGRAPHIC(27793, 116523017);
    };
    if ((varbitplayer_33371 >= 60)) {
        IF_SETGRAPHIC(27795, 116523016);
    };
    if ((varbitplayer_33371 >= 100)) {
        IF_SETGRAPHIC(27797, 116523015);
    };
    var int1 = MAX(1, SCALE(int0, 100, varbitplayer_33371));
    var int2 = SCALE(int1, int0, 28);
    IF_SETSIZE(41, int1, 0, 0, 116523011);
    IF_SETONVARTRANSMIT(callback(script12663, 6451, 1), 116523011);
    return;
}