//
function script5074(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((varclient_1065 == -1 as coordgrid)) {
            CC_SETHIDE(true);
            return;
        };
        [int2, int3] = [(COORDX(COORD()) - COORDX(varclient_1065)), (COORDZ(COORD()) - COORDZ(varclient_1065))];
        if (((((int2 < 0) || (int2 >= 112)) || (int3 < 0)) || (int3 >= 112))) {
            CC_SETHIDE(true);
            return;
        };
        int4 = (varclient_1396 + 1);
        CC_SETHIDE(false);
        CC_SETPOSITION((((int2 + 2) * varclient_1396) - 1), (IF_GETSCROLLHEIGHT(int0) - (((int3 + 2) * varclient_1396) + int4)), 0, 0);
        CC_SETSIZE(int4, int4, 0, 0);
        if ((MODULO(CLIENTCLOCK(), 40) < 20)) {
            CC_SETCOLOUR(9408399);
        } else {
            CC_SETCOLOUR(14540032);
        };
    };
    return;
}