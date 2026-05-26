//
function script12479(int0: number): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((varbitplayer_22875 == 1)) {
        IF_SETGRAPHIC(27306 as graphic, int0);
        IF_SETONMOUSEOVER(callback(script44, int0, 27307), int0);
        IF_SETONMOUSELEAVE(callback(script44, int0, 27306), int0);
    } else {
        IF_SETGRAPHIC(27313 as graphic, int0);
        IF_SETONMOUSEOVER(callback(script44, int0, 27314), int0);
        IF_SETONMOUSELEAVE(callback(script44, int0, 27313), int0);
    };
    return;
}