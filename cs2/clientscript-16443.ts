//
function script16443(int0: number): void {
    if ((IF_GETWIDTH(comp(1253, 319) /*wheel_of_fortune:reward_layer_bonus_prizes_content_scroll_layer*/) >= IF_GETWIDTH(comp(1253, 320) /*wheel_of_fortune:reward_layer_bonus_prizes_content*/))) {
        return;
    };
    var int1 = IF_GETSCROLLX(comp(1253, 319));  // wheel_of_fortune:reward_layer_bonus_prizes_content_scroll_layer
    var int2 = (IF_GETSCROLLWIDTH(comp(1253, 319)) - IF_GETWIDTH(comp(1253, 319)));  // wheel_of_fortune:reward_layer_bonus_prizes_content_scroll_layer
    switch (int0) {
        case 1: {
            int1 = MIN((int1 + 80), int2);
            break;
        }
        case -1: {
            int1 = MAX((int1 - 80), 0);
            break;
        }
    };
    IF_SETSCROLLPOS(int1, 0, comp(1253, 319));  // wheel_of_fortune:reward_layer_bonus_prizes_content_scroll_layer
    if ((int1 == 0)) {
        script13959(82116930, 37674, 1);
        script13959(82116932, 37674, 0);
    } else if ((int1 == int2)) {
        script13959(82116930, 37674, 0);
        script13959(82116932, 37674, 1);
    } else {
        script13959(82116930, 37674, 0);
        script13959(82116932, 37674, 0);
    };
    return;
}