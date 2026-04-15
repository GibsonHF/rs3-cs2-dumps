//
function script6925(int0: int): void {
    var int1 = INV_GETOBJ(94 as inv, int0);
    if ((int1 != -1 as obj)) {
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT(int1, INV_GETNUM(94 as inv, int0));
        CC_SETOUTLINE(1);
        CC_SETPOSITION(2, 0, 1, 1);
    } else {
        CC_SETSIZE(32, 32, 0, 0);
        CC_SETGRAPHIC(enum_getvalue(0, 23, 796 as cs2enum, int0));
        CC_SETOUTLINE(0);
        CC_SETPOSITION(0, 0, 1, 1);
    };
    return;
}