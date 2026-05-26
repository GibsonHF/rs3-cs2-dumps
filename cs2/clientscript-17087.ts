//
function script17087(int0: number): void {
    var int1 = INV_GETOBJ(930, int0);
    if (((((int0 == -1) || (int1 == -1)) || (varbitplayer_52406 != 2)) || (varbitplayer_28117 == 1))) {
        IF_SETTEXT("", 106561575);
        IF_SETHIDE(1, 106561614);
        IF_SETENABLED(0, 106561624);
        IF_SETENABLED(0, 106561627);
        IF_SETTEXT(" - ", 106561626);
        return;
    };
    var long0 = 0n;
    var int2 = INV_GETNUM(930, int0);
    if ((CC_FIND(106561615, int0) == 1)) {
        IF_SETTEXT(`Selected: <col=ffffff>${TOSTRING_LOCALISED(int2, 1)} x ${OC_NAME(int1)}`, 106561575);
        IF_SETPOSITION((CC_GETX() - 2), (CC_GETY() - 4), 0, 0, 106561614);
        IF_SETHIDE(0, 106561614);
        IF_SETENABLED(1, 106561624);
        IF_SETENABLED(1, 106561627);
        long0 = script11466(int1, script11472(int0), INV_GETNUM(930, int0), 7);
        IF_SETTEXT(script17372(long0, 6, 0), 106561626);
    };
    return;
}