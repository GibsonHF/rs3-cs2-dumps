//
function script1535(): void {
    IF_SETHIDE(true, comp(18, 4));  // tuska_island_overlay:finished_recharge
    IF_SETSIZE(0, IF_GETHEIGHT(comp(18, 17)), 0, 0, comp(18, 17));  // tuska_island_overlay:gt_ready
    IF_SETONTIMER(callback(script1536, CLIENTCLOCK()), comp(18, 16));  // tuska_island_overlay:gatestone_layer
    return;
}