//
function script12998(): void {
    var int0 = SCALE(varplayer_6718, 45, 100);
    var int1 = SCALE(350, 100, int0);
    if ((IF_GETWIDTH(comp(1819, 2)) != int1)) {
        IF_SETSIZE(int1, 33, 0, 0, comp(1819, 2));
        IF_SETONTIMER(callback(script12999, int1, int0), comp(1819, 8));
    };
    return;
}