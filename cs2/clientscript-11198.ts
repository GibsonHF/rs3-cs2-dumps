//
function script11198(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    IF_SETONTIMER(callback(), 82116680);
    if ((varclient_4751 < script766(int0))) {
        IF_SETTEXT("Coming Soon!", 82116680);
        IF_SETTEXTFONT(29, 82116680);
    } else if ((int0 == 38726)) {
        IF_SETTEXT(script11200(varclient_6297, varclient_6298), 82116680);
        IF_SETONTIMER(callback(script13729), 82116680);
    } else {
        IF_SETTEXT(script11200(varclient_4752, varclient_4753), 82116680);
        IF_SETONTIMER(callback(script11199), 82116680);
    };
    IF_SETHIDE(0, 82116680);
    IF_SETHIDE(0, 82116677);
    IF_SETHIDE(0, 82116678);
    if ((varplayer_5191 < script766(int0))) {
        stack(25624);
        stack(82116678);
        IF_SETGRAPHIC();
        varplayer_5191 = script766(int0);
    } else {
        stack(25623);
        stack(82116678);
        IF_SETGRAPHIC();
    };
    return;
}