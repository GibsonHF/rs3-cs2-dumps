//
function script7555(): void {
    var int0 = 0;
    if ((varbitplayer_18127 == 20)) {
        int0 = 204;
    } else {
        int0 = (varbitplayer_18127 * 10);
    };
    if ((IF_GETWIDTH(comp(378, 3)) > int0)) {
        IF_SETSIZE(int0, IF_GETHEIGHT(comp(378, 3)), 0, 0, comp(378, 3));
    } else {
        IF_SETONTIMER(callback(script7556, int0), comp(378, 1));
    };
    return;
}