//
function script17087(int0: number): void {
    var int1 = INV_GETOBJ(930 as inv, int0);
    if (((((int0 == -1) || (int1 == -1 as obj)) || (varbitplayer_52406 != 2)) || (varbitplayer_28117 == 1))) {
        IF_SETTEXT("", comp(1626, 39));  // death:overflow_selected
        IF_SETHIDE(true, comp(1626, 78));  // death:overflow_highlight
        IF_SETENABLED(false, comp(1626, 88));  // death:confirm_overflow_single
        IF_SETENABLED(false, comp(1626, 91));  // death:confirm_overflow_destroy
        IF_SETTEXT(" - ", comp(1626, 90));  // death:reclaim_cost_overflow
        return;
    };
    var long0 = 0n;
    var int2 = INV_GETNUM(930 as inv, int0);
    if ((CC_FIND(comp(1626, 79), int0) == 1)) {  // death:overflow_click
        IF_SETTEXT(`Selected: <col=ffffff>${TOSTRING_LOCALISED(int2, 1)} x ${OC_NAME(int1)}`, comp(1626, 39));  // death:overflow_selected
        IF_SETPOSITION((CC_GETX() - 2), (CC_GETY() - 4), 0, 0, comp(1626, 78));  // death:overflow_highlight
        IF_SETHIDE(false, comp(1626, 78));  // death:overflow_highlight
        IF_SETENABLED(true, comp(1626, 88));  // death:confirm_overflow_single
        IF_SETENABLED(true, comp(1626, 91));  // death:confirm_overflow_destroy
        long0 = script11466(int1, script11472(int0), INV_GETNUM(930 as inv, int0), 7);
        IF_SETTEXT(script17372(long0, 6, 0), comp(1626, 90));  // death:reclaim_cost_overflow
    };
    return;
}