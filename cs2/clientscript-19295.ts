//
function script19295(): void {
    var int0 = SCALE(varplayer_11882, 100000, 100);
    var int1 = SCALE((IF_GETWIDTH(IF_GETPARENTLAYER(comp(1290, 33))) - 44), 100, int0);
    IF_SETSIZE(int1, 33, 0, 0, comp(1290, 33));
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_11882, 1), comp(1290, 34));
    IF_SETONTIMER(callback(script19296, int1, int0), comp(1290, 102));
    return;
}