//
function script19565(int0: number): void {
    script19507();
    if ((int0 == 1)) {
        script19535();
    };
    if ((varbitplayer_45140 == 0)) {
        if ((varclient_6684 == false)) {
            if ((CC_FIND(comp(1313, 118), 14) == 1)) {  // group_ironman_storage:border_layer
                CC_SETTEXT(`${varclient_8166} Storage`);
            };
            script19504();
            IF_SETHIDE(true, comp(1313, 115));  // group_ironman_storage:bottom_panel_cancel
        };
        IF_SETHIDE(true, comp(1313, 72));  // group_ironman_storage:message_nofilter
        if ((int0 == 1)) {
            script19526();
            script19518(1);
        };
        return;
    };
    if ((CC_FIND(comp(1313, 118), 14) == 1)) {  // group_ironman_storage:border_layer
        CC_SETTEXT(`${varclient_8166} Storage (${enum_getvalue(0, 36, 15582, varbitplayer_45140)})`);
    } else {
        IF_SETONTIMER(callback(script19566), comp(1313, 4));  // group_ironman_storage:content
    };
    if ((int0 == 1)) {
        script19526();
        script19518(1);
    };
    IF_SETHIDE(false, comp(1313, 115));  // group_ironman_storage:bottom_panel_cancel
    IF_SETPOSITION(0, 0, 0, 0, comp(1313, 115));  // group_ironman_storage:bottom_panel_cancel
    script13993(86048883, -1, 28228, "Clear Filter");
    IF_SETONOP(callback(script19560), comp(1313, 117));  // group_ironman_storage:bottom_panel_cancel_button
    return;
}