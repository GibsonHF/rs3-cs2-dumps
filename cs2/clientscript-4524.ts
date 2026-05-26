//
function script4524(int0: number, int1: number): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    var int2 = -1;
    if ((varbitplayer_22875 == 1)) {
        if ((int1 == 4)) {
            int2 = 32063;
        };
        if ((int1 == 5)) {
            int2 = 32086;
        };
    } else {
        if ((int1 == 4)) {
            int2 = 18545;
        };
        if ((int1 == 5)) {
            int2 = 22751;
        };
    };
    CC_SETGRAPHIC(int2);
    IF_SETNOCLICKTHROUGH(1, int0);
    IF_SETHIDE(1, int0);
    return;
}