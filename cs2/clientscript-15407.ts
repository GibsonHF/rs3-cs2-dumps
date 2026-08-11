//
function script15407(): void {
    var int0 = IF_GETWIDTH(comp(264, 10));  // paint_cannon:clickout_blocker
    var int1 = IF_GETHEIGHT(comp(264, 10));  // paint_cannon:clickout_blocker
    var int2 = IF_GETX(comp(264, 16));  // paint_cannon:container
    var int3 = IF_GETY(comp(264, 16));  // paint_cannon:container
    var int4 = IF_GETWIDTH(comp(264, 16));  // paint_cannon:container
    var int5 = IF_GETHEIGHT(comp(264, 16));  // paint_cannon:container
    IF_SETSIZE(int2, 0, 0, 1, comp(264, 11));  // paint_cannon:bg_left
    IF_SETSIZE(((int0 - int2) - int4), 0, 0, 1, comp(264, 12));  // paint_cannon:bg_right
    IF_SETSIZE(0, int3, 1, 0, comp(264, 13));  // paint_cannon:bg_top
    IF_SETSIZE(0, ((int1 - int3) - int5), 1, 0, comp(264, 14));  // paint_cannon:bg_bot
    IF_SETONTIMER(callback(script4156, int0, int1), comp(264, 10));  // paint_cannon:clickout_blocker
    return;
}