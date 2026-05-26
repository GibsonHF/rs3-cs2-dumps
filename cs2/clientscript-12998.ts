//
function script12998(): void {
    var int0 = SCALE(varplayer_6718, 45, 100);
    var int1 = SCALE(350, 100, int0);
    if ((IF_GETWIDTH(119209986) != int1)) {
        IF_SETSIZE(int1, 33, 0, 0, 119209986);
        IF_SETONTIMER(callback(script12999, int1, int0), 119209992);
    };
    return;
}