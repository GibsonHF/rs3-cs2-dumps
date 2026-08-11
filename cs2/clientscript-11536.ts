//
function script11536(): void {
    if ((varbitplayer_51271 == 0)) {
        IF_SETGRAPHIC(27372 as graphic, comp(1253, 5));  // wheel_of_fortune:background
        CC_DELETEALL(comp(1253, 3));  // wheel_of_fortune:background_holder
        IF_SETHIDE(true, comp(300, 1));  // trh155_overlay:bonus_layer
    } else {
        script17173();
        IF_SETHIDE(false, comp(300, 1));  // trh155_overlay:bonus_layer
    };
    return;
}