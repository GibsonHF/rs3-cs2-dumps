//
function script17087(int0: int): void {
    var int1 = INV_GETOBJ(930 as inv, int0);
    if (((((int0 == -1) || (int1 == -1 as obj)) || (varbitplayer_52406 != 2)) || (varbitplayer_28117 == 1))) {
        IF_SETTEXT("", comp(1626, 39));
        IF_SETHIDE(true, comp(1626, 78));
        IF_SETENABLED(false, comp(1626, 88));
        IF_SETENABLED(false, comp(1626, 91));
        IF_SETTEXT(" - ", comp(1626, 90));
        return;
    };
    var long0 = 0n;
    var int2 = INV_GETNUM(930 as inv, int0);
    if ((CC_FIND(comp(1626, 79), int0) == 1)) {
        IF_SETTEXT(`Selected: <col=ffffff>${TOSTRING_LOCALISED(int2, 1)} x ${OC_NAME(int1)}`, comp(1626, 39));
        IF_SETPOSITION((CC_GETX() - 2), (CC_GETY() - 4), 0, 0, comp(1626, 78));
        IF_SETHIDE(false, comp(1626, 78));
        IF_SETENABLED(true, comp(1626, 88));
        IF_SETENABLED(true, comp(1626, 91));
        long0 = script11466(int1, script11472(int0), INV_GETNUM(930 as inv, int0), 7);
        IF_SETTEXT(script17372(long0, 6, 0), comp(1626, 90));
    };
    return;
}