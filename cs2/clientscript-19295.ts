//
function script19295(): void {
    var int0 = SCALE(varplayer_11882, 100000, 100);
    var int1 = SCALE((IF_GETWIDTH(IF_GETPARENTLAYER(84541473)) - 44), 100, int0);
    IF_SETSIZE(int1, 33, 0, 0, 84541473);
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_11882, 1), 84541474);
    IF_SETONTIMER(callback(script19296, int1, int0), 84541542);
    return;
}