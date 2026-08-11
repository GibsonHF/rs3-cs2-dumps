//
function script7367(): void {
    if ((varbitplayer_17475 == 0)) {
        if ((IF_GETHIDE(comp(1379, 80)) == false)) {  // pop_manager:zone_layer
            IF_SETHIDE(false, comp(1379, 114));  // pop_manager:zone_tutorial
        } else {
            IF_SETHIDE(true, comp(1379, 114));  // pop_manager:zone_tutorial
        };
    } else {
        IF_SETHIDE(true, comp(1379, 114));  // pop_manager:zone_tutorial
    };
    if ((varbitplayer_17476 == 0)) {
        if ((IF_GETHIDE(comp(1379, 75)) == false)) {  // pop_manager:scrolls_layer
            IF_SETHIDE(false, comp(1379, 76));  // pop_manager:scroll_tutorial
        } else {
            IF_SETHIDE(true, comp(1379, 76));  // pop_manager:scroll_tutorial
        };
    } else {
        IF_SETHIDE(true, comp(1379, 76));  // pop_manager:scroll_tutorial
    };
    return;
}