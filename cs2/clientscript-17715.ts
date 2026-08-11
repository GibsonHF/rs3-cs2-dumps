//
function script17715(): void {
    var int0 = script443();
    if ((script17713() == 1)) {
        IF_SETGRAPHIC(33605 as graphic, comp(1253, 5));  // wheel_of_fortune:background
    } else {
        IF_SETGRAPHIC(script10406(int0), comp(1253, 5));  // wheel_of_fortune:background
    };
    if ((int0 == 8)) {
        IF_SETGRAPHIC(script10406(0), comp(1120, 2));  // trh190_overlay:preload_background
    } else {
        IF_SETGRAPHIC(script10406((int0 + 1)), comp(1120, 2));  // trh190_overlay:preload_background
    };
    return;
}