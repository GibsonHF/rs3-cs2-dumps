//
function script10978(): void {
    var int0 = IF_GETHEIGHT(comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    if ((int0 > 5)) {
        IF_SETSIZE(417, MAX((int0 - 5), 5), 0, 0, comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    } else {
        IF_SETONTIMER(callback(), comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    };
    return;
}