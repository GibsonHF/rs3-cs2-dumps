//
function script4579(int0: number): void {
    if ((int0 == 1)) {
        IF_SETGRAPHIC(16392 as graphic, comp(1253, 5));  // wheel_of_fortune:background
        IF_SETHIDE(false, comp(1253, 80));  // wheel_of_fortune:bonus_feature_counter_layer
        IF_SETHIDE(false, comp(1253, 75));  // wheel_of_fortune:bonus_feature_info_layer
    } else {
        IF_SETGRAPHIC(7404 as graphic, comp(1253, 5));  // wheel_of_fortune:background
        IF_SETHIDE(true, comp(1253, 80));  // wheel_of_fortune:bonus_feature_counter_layer
        IF_SETHIDE(true, comp(1253, 75));  // wheel_of_fortune:bonus_feature_info_layer
    };
    return;
}