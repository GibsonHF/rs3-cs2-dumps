//
function script19544(int0: number): void {
    var int1 = IF_GETHEIGHT(comp(1313, 74));  // group_ironman_storage:clan_items_container
    IF_SETSCROLLSIZE(0, MAX(int0, int1), comp(1313, 74));  // group_ironman_storage:clan_items_container
    IF_SETSCROLLPOS(0, varclient_8168, comp(1313, 74));  // group_ironman_storage:clan_items_container
    if ((int0 > int1)) {
        IF_SETHIDE(false, comp(1313, 70));  // group_ironman_storage:scrollbar
        script72(86048838, 86048842, IF_GETSCROLLY(comp(1313, 74)));  // group_ironman_storage:clan_items_container
    } else {
        IF_SETHIDE(true, comp(1313, 70));  // group_ironman_storage:scrollbar
    };
    script157(86048838, 86048842, IF_GETSCROLLY(comp(1313, 74)), 1);  // group_ironman_storage:clan_items_container
    varclient_8167 = int0;
    return;
}