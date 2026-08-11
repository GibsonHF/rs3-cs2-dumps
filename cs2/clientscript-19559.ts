//
function script19559(): void {
    IF_SETHIDE(true, comp(1313, 73));  // group_ironman_storage:message_nomatches
    IF_SETHIDE(true, comp(1313, 71));  // group_ironman_storage:message_nosearch
    script19504();
    script19526();
    varclient_6711 = "";
    varclient_6684 = 0;
    if ((CC_FIND(comp(1313, 118), 14) == 1)) {  // group_ironman_storage:border_layer
        CC_SETTEXT(`${varclient_8166} Storage`);
    };
    IF_SETONTIMER(callback(), comp(1313, 93));  // group_ironman_storage:search_button
    IF_SETONTIMER(callback(), comp(1313, 95));  // group_ironman_storage:search_icon
    if (((varclient_2236 == 8) && (varclient_2235 == 86048864))) {
        script9(86048865, 86048866, 86048867, 86048869, "Search...");
        script8841(11, 0);
    };
    IF_SETHIDE(true, comp(1313, 115));  // group_ironman_storage:bottom_panel_cancel
    return;
}