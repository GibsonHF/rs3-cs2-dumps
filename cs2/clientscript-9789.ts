//
function script9789(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    CC_CREATE(comp(1253, 556), 5, 0);  // wheel_of_fortune:fake_op
    CC_CREATE(comp(1253, 556), 5, 1);  // wheel_of_fortune:fake_op
    CC_CREATE(comp(1253, 556), 5, 2);  // wheel_of_fortune:fake_op
    CC_CREATE(comp(1253, 556), 5, 3);  // wheel_of_fortune:fake_op
    CC_CREATE(comp(1253, 556), 5, 4);  // wheel_of_fortune:fake_op
    IF_SETONOP(callback(script9725, 1, 0), comp(644, 3));  // trh167_overlay:crystal_01
    IF_SETONOP(callback(script9725, 1, 1), comp(644, 4));  // trh167_overlay:crystal_02
    IF_SETONOP(callback(script9725, 1, 2), comp(644, 5));  // trh167_overlay:crystal_03
    IF_SETONOP(callback(script9725, 1, 3), comp(644, 6));  // trh167_overlay:crystal_04
    IF_SETONOP(callback(script9725, 1, 4), comp(644, 7));  // trh167_overlay:crystal_05
    IF_SETONOP(callback(script9725, 2, 0), comp(644, 45));  // trh167_overlay:prize_01
    IF_SETONOP(callback(script9725, 2, 1), comp(644, 50));  // trh167_overlay:prize_02
    IF_SETONOP(callback(script9725, 2, 2), comp(644, 55));  // trh167_overlay:prize_03
    IF_SETONOP(callback(script9725, 2, 3), comp(644, 60));  // trh167_overlay:prize_04
    IF_SETONOP(callback(script9725, 2, 4), comp(644, 65));  // trh167_overlay:prize_05
    IF_SETONOP(callback(script9725, 5, 0), comp(644, 22));  // trh167_overlay:reroll_button
    IF_SETONOP(callback(script9725, 6, 0), comp(644, 76));  // trh167_overlay:warning_confirm_click
    IF_SETONOP(callback(script9725, 7, 0), comp(644, 12));  // trh167_overlay:choose_button
    IF_SETONOP(callback(script9725, 8, 0), comp(644, 31));  // trh167_overlay:tutorial_button_left
    IF_SETONOP(callback(script9725, 8, 1), comp(644, 30));  // trh167_overlay:tutorial_button_right
    return;
}