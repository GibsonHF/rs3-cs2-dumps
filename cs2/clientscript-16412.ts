//
function script16412(): number {
    if ((varplayer_8745 == -1 as dbrow)) {
        IF_SETHIDE(true, comp(955, 8));  // uitutorial:box_container
        IF_SETHIDE(true, comp(955, 23));  // uitutorial:arrow_below
        IF_SETHIDE(true, comp(955, 21));  // uitutorial:arrow_above
        IF_SETHIDE(true, comp(955, 27));  // uitutorial:arrow_left
        IF_SETHIDE(true, comp(955, 25));  // uitutorial:arrow_right
        IF_SETONTIMER(callback(), comp(955, 15));  // uitutorial:build_layer
        return 0;
    };
    return 1;
}