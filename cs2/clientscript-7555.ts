//
function script7555(): void {
    var int0 = 0;
    if ((varbitplayer_18127 == 20)) {
        int0 = 204;
    } else {
        int0 = (varbitplayer_18127 * 10);
    };
    if ((IF_GETWIDTH(24772611) > int0)) {
        IF_SETSIZE(int0, IF_GETHEIGHT(24772611), 0, 0, 24772611);
    } else {
        IF_SETONTIMER(callback(script7556, int0), 24772609);
    };
    return;
}