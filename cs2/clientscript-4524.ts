//
function script4524(int0: component, int1: unknown_int): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    var int2 = -1 as graphic;
    if ((varbitplayer_22875 == 1)) {
        if ((int1 == 4)) {
            int2 = 32063 as graphic;
        };
        if ((int1 == 5)) {
            int2 = 32086 as graphic;
        };
    } else {
        if ((int1 == 4)) {
            int2 = 18545 as graphic;
        };
        if ((int1 == 5)) {
            int2 = 22751 as graphic;
        };
    };
    CC_SETGRAPHIC(int2);
    IF_SETNOCLICKTHROUGH(1, int0);
    IF_SETHIDE(true, int0);
    return;
}