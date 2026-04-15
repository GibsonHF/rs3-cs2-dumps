//
function script9882(int0: unknown_int, int1: int): void {
    var int2 = 0;
    if ((int1 == varbitplayer_1903)) {
        int2 = 1;
    };
    if ((int2 == 1)) {
        stack(654);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(653);
        stack(int0);
        IF_SETGRAPHIC();
    };
    IF_SETONMOUSEOVER(callback(script9881, int0, int2, 1), int0);
    IF_SETONMOUSELEAVE(callback(script9881, int0, int2, 0), int0);
    return;
}