//
function script12479(int0: unknown_int): void {
    if ((int0 == -1)) {
        return;
    };
    if ((varbitplayer_22875 == 1)) {
        stack(27306);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(script44, int0, 27307), int0);
        IF_SETONMOUSELEAVE(callback(script44, int0, 27306), int0);
    } else {
        stack(27313);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(script44, int0, 27314), int0);
        IF_SETONMOUSELEAVE(callback(script44, int0, 27313), int0);
    };
    return;
}