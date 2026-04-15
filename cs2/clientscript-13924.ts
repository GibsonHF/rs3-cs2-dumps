//
function script13924(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    varclient_6364 = 0;
    varclient_6365 = 0;
    varclient_6366 = 0;
    varclient_6367 = 0;
    varclient_6368 = 0;
    CC_DELETEALL(comp(1931, 18));
    CC_DELETEALL(comp(1931, 19));
    CC_DELETEALL(comp(1931, 17));
    while ((int0 < 25)) {
        CC_CREATE(comp(1931, 18), 5, int0);
        CC_SETSIZE(49, 49, 0, 0);
        CC_SETPOSITION((56 * int1), (56 * int2), 0, 0);
        CC_SETONCLICK(callback(script13928, int0));
        CC_SETOP(1, "Move");
        CC_CREATE(126550035, 5, int0);
        CC_SETSIZE(49, 49, 0, 0);
        CC_SETPOSITION((56 * int1), (56 * int2), 0, 0);
        CC_CREATE(126550033, 3, int0);
        CC_SETTRANS(255);
        CC_SETSIZE((49 + 4), (49 + 4), 0, 0);
        CC_SETPOSITION((56 * int1), (56 * int2), 0, 0);
        CC_SETCOLOUR(16711680);
        CC_SETFILL(1);
        int1 = MODULO(++int0, 5);
        int2 = (int0 / 5);
    };
    return;
}