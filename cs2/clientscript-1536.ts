//
function script1536(int0: number): void {
    var int1 = (65 - SCALE(((int0 + 300) - CLIENTCLOCK()), 300, 50));
    var int2 = 255;
    var int3 = SCALE(220, 50, int1);
    var int4 = SCALE(180, 50, int1);
    if ((int1 < 65)) {
        IF_SETSIZE(int1, IF_GETHEIGHT(comp(18, 17)), 0, 0, comp(18, 17));  // tuska_island_overlay:gt_ready
        IF_SETCOLOUR(script693(int2, int3, int4), comp(18, 0));  // tuska_island_overlay:gt_text
    } else {
        IF_SETHIDE(false, comp(18, 4));  // tuska_island_overlay:finished_recharge
        IF_SETONTIMER(callback(), comp(18, 16));  // tuska_island_overlay:gatestone_layer
    };
    return;
}