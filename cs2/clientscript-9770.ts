//
function script9770(int0: number): void {
    if ((int0 == 1)) {
        IF_SETTEXT("In rolling mode, the ball can be kicked away from you only, but will bounce off surfaces and can be kicked when moving.", comp(864, 11));  // trh17_config:mode_info_text
    } else {
        IF_SETTEXT("In free mode, you can attempt to kick the ball anywhere by clicking on the ball and then on the ground, but may not always end up where you expect.", comp(864, 11));  // trh17_config:mode_info_text
    };
    return;
}