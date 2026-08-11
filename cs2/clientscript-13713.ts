//
function script13713(int0: number): void {
    if ((int0 == 1)) {
        script8844(1, 16, 8, 125042698, -1);
        script8844(1, 17, 8, 125042706, -1);
        script8844(1, 18, 8, 125042714, -1);
        script8844(1, 20, 8, 125042722, -1);
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1908, 10));  // mtxfest17_racing:outside_lane_button_active_layer
        IF_SETOPKEY(1, 0, 0, comp(1908, 18));  // mtxfest17_racing:middle_lane_button_active_layer
        IF_SETOPKEY(1, 0, 0, comp(1908, 26));  // mtxfest17_racing:inside_lane_button_active_layer
        IF_SETOPKEY(1, 0, 0, comp(1908, 34));  // mtxfest17_racing:exit_button_active_layer
    };
    return;
}