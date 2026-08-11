//
function script19538(): void {
    if ((CC_FIND(comp(1313, 118), 1) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 0);
    } else {
        IF_SETONTIMER(callback(script19537), comp(1313, 3));  // group_ironman_storage:background_layer
        return;
    };
    if ((CC_FIND(comp(1313, 118), 5) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 1);
    };
    if ((CC_FIND(comp(1313, 118), 2) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 2);
    };
    if ((CC_FIND(comp(1313, 118), 6) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 3);
    };
    if ((CC_FIND(comp(1313, 118), 7) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 4);
    };
    if ((CC_FIND(comp(1313, 118), 11) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 5);
    };
    if ((CC_FIND(comp(1313, 118), 12) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 6);
    };
    if ((CC_FIND(comp(1313, 118), 13) == 1)) {  // group_ironman_storage:border_layer
        script3880(1017, 7);
    };
    return;
}