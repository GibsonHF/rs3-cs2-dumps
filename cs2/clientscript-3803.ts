//
function script3803(int0: number, int1: number): void {
    switch (int1) {
        case 1: {
            if ((IF_GETHIDE(comp(639, 31)) == false)) {  // trh166:warning_confirm_layer
                return;
            };
            IF_TRIGGEROP(comp(1253, 556), -1, 1);  // wheel_of_fortune:fake_op
            break;
        }
        case 2: {
            IF_TRIGGEROP(comp(1253, 556), int0, int1);  // wheel_of_fortune:fake_op
            break;
        }
        case 3: {
            IF_TRIGGEROP(comp(1253, 556), int0, int1);  // wheel_of_fortune:fake_op
            break;
        }
        case 4: {
            IF_TRIGGEROP(comp(1253, 556), int0, int1);  // wheel_of_fortune:fake_op
            break;
        }
    };
    return;
}