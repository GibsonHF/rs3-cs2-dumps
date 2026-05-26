//
function script9882(int0: number, int1: number): void {
    var int2 = 0;
    if ((int1 == varbitplayer_1903)) {
        int2 = 1;
    };
    if ((int2 == 1)) {
        IF_SETGRAPHIC(654, int0);
    } else {
        IF_SETGRAPHIC(653, int0);
    };
    IF_SETONMOUSEOVER(callback(script9881, int0, int2, 1), int0);
    IF_SETONMOUSELEAVE(callback(script9881, int0, int2, 0), int0);
    return;
}