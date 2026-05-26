//
function script18452(): void {
    var int0 = -1;
    var int1 = script18421(-1);
    var int2 = 10;
    var int3 = 7;
    var int4 = 83886103;
    CC_DELETEALL(int4);
    while ((++int0 < int1)) {
        int2 = (12 + (int0 * 50));
        CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
        CC_SETGRAPHIC(18266);
        CC_SETSIZE(36, 36, 0, 0);
        CC_SETPOSITION(int2, int3, 0, 0);
        if ((varbitplayer_54952 >= (int0 + 1))) {
            CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
            CC_SETGRAPHIC(32125);
            CC_SETSIZE(30, 30, 0, 0);
            CC_SETPOSITION((int2 + 3), (int3 + 3), 0, 0);
            CC_SETONMOUSEREPEAT(callback(script18460, -2147483645));
        };
    };
    return;
}