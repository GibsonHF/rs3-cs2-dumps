//
function script14861(int0: number, int1: number, int2: number): void {
    var int3 = enum_getvalue(0, 74, 14090 as cs2enum, int2);
    if ((int3 == -1 as dbrow)) {
        return;
    };
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(691, 141));  // arch_relic_management:confirmation_contents_layer
            IF_SETSIZE(460, 330, 0, 0, comp(691, 75));  // arch_relic_management:confirmation_window
            IF_SETONOP(callback(script14863, -2147483644, 1, int0), comp(691, 165));  // arch_relic_management:confirmation_relic_slot_1_background_control_layer
            IF_SETONOP(callback(script14863, -2147483644, 2, int0), comp(691, 145));  // arch_relic_management:confirmation_relic_slot_2_background_control_layer
            IF_SETONOP(callback(script14863, -2147483644, 3, int0), comp(691, 183));  // arch_relic_management:confirmation_relic_slot_3_background_control_layer
            script14864(int1);
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(691, 141));  // arch_relic_management:confirmation_contents_layer
            IF_SETSIZE(460, 198, 0, 0, comp(691, 75));  // arch_relic_management:confirmation_window
            break;
        }
        default: {
            return;
        }
    };
    script14862(int0, int1, int2);
    script14870();
    IF_SETHIDE(false, comp(691, 73));  // arch_relic_management:popup_window
    IF_SETHIDE(false, comp(691, 75));  // arch_relic_management:confirmation_window
    return;
}