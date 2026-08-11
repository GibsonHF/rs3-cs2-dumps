//
function script10963(): void {
    var int0 = script10965(varbitplayer_26868);
    var int1 = IF_GETHEIGHT(comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    if ((int1 < int0)) {
        IF_SETSIZE(417, MAX((int1 + ((int0 - int1) / 25)), (int1 + 1)), 0, 0, comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    } else {
        IF_SETONTIMER(callback(), comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    };
    script10964();
    return;
}