//
function script9265(): void {
    IF_SETTEXT("Loading...", comp(105, 215));
    IF_SETTEXT("Loading...", comp(105, 147));
    IF_SETTEXT("Loading...", comp(105, 150));
    IF_SETTEXT("Loading...", comp(105, 140));
    IF_SETTEXT("Loading...", comp(105, 170));
    IF_SETTEXT("Loading...", comp(105, 185));
    IF_SETONTIMER(callback(), comp(105, 141));
    if ((varplayer_135 == -1 as obj)) {
        IF_SETTEXT("", comp(105, 141));
    } else {
        IF_SETTEXT("Loading...", comp(105, 141));
    };
    script20874();
    return;
}