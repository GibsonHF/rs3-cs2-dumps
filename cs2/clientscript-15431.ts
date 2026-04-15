//
function script15431(): void {
    IF_SETTEXT(script11601(varplayer_11326, 1), comp(760, 41));
    var int0 = false;
    if ((varplayer_11326 >= 400)) {
        int0 = true;
    };
    if ((int0 == true)) {
        IF_SETOP(1, "Buy Bonus", comp(760, 43));
    } else {
        IF_SETOP(1, "", comp(760, 43));
    };
    IF_SETENABLED(int0, comp(760, 43));
    return;
}