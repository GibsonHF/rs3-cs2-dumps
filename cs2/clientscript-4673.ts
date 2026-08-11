//
function script4673(int0: number): void {
    switch (int0) {
        case 2:
        case 3:
        case 6: {
            IF_SETHIDE(true, comp(102, 35));  // fremsaga_reward:obj_4_layer
            IF_SETHIDE(false, comp(102, 34));  // fremsaga_reward:obj_3_layer
            IF_SETONTIMER(callback(script4674), comp(102, 34));  // fremsaga_reward:obj_3_layer
            break;
        }
        default: {
            IF_SETHIDE(true, comp(102, 34));  // fremsaga_reward:obj_3_layer
            IF_SETHIDE(false, comp(102, 35));  // fremsaga_reward:obj_4_layer
            IF_SETONTIMER(callback(script4674), comp(102, 35));  // fremsaga_reward:obj_4_layer
            break;
        }
    };
    return;
}