//
function script11198(int0: struct): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    IF_SETONTIMER(callback(), comp(1253, 72));
    if ((varclient_4751 < script766(int0))) {
        IF_SETTEXT("Coming Soon!", comp(1253, 72));
        IF_SETTEXTFONT(29 as fontmetrics, comp(1253, 72));
    } else if ((int0 == 38726 as struct)) {
        IF_SETTEXT(script11200(varclient_6297, varclient_6298), comp(1253, 72));
        IF_SETONTIMER(callback(script13729), comp(1253, 72));
    } else {
        IF_SETTEXT(script11200(varclient_4752, varclient_4753), comp(1253, 72));
        IF_SETONTIMER(callback(script11199), comp(1253, 72));
    };
    IF_SETHIDE(false, comp(1253, 72));
    IF_SETHIDE(false, comp(1253, 69));
    IF_SETHIDE(false, comp(1253, 70));
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