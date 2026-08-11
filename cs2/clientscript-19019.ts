//
function script19019(int0: number): void {
    IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
    IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
    IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    switch (int0) {
        case 1515: {
            IF_SETGRAPHIC(30450 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 40380: {
            IF_SETGRAPHIC(28233 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 7229: {
            IF_SETGRAPHIC(276 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 44604: {
            IF_SETGRAPHIC(12014 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 49941: {
            IF_SETGRAPHIC(33886 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            script2994(82116611, 0, 17, 43, 0, 0, 362, 386, 0, 0, 33896);
            break;
        }
    };
    return;
}