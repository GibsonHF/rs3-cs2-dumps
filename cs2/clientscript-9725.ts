//
function script9725(int0: number, int1: number): void {
    switch (int0) {
        case 6: {
            if ((IF_GETHIDE(comp(1253, 265)) == true)) {  // wheel_of_fortune:reward_layer
                IF_TRIGGEROP(comp(1253, 556), int1, int0);  // wheel_of_fortune:fake_op
            };
            break;
        }
        default: {
            if (((IF_GETHIDE(comp(1253, 265) /*wheel_of_fortune:reward_layer*/) == true) && (IF_GETHIDE(comp(644, 68) /*trh167_overlay:warning_confirm_layer*/) == true))) {
                IF_TRIGGEROP(comp(1253, 556), int1, int0);  // wheel_of_fortune:fake_op
            };
            break;
        }
    };
    return;
}