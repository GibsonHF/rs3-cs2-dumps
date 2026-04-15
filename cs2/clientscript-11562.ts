//
function script11562(): void {
    if ((varbitplayer_28209 == 0)) {
        return;
    };
    var int0 = -1;
    IF_SETHIDE(false, comp(1631, 49));
    stack(25658);
    stack(106889267);
    IF_SETGRAPHIC();
    int0 = 25659;
    IF_SETONMOUSEOVER(callback(script11561, 5, int0), 106889267);
    int0 = 25658;
    IF_SETONMOUSELEAVE(callback(script11561, 5, int0), 106889267);
    IF_SETONTIMER(callback(script11032), 106889219);
    IF_SETTEXT(inttostring(varbitplayer_28193, 10), 106889268);
    script11564();
    if ((IF_GETHIDE(106889279) == 0)) {
        IF_SETONTIMER(callback(script11563), comp(1631, 66));
    };
    return;
}