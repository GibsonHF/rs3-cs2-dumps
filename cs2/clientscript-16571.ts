//
function script16571(int0: number): void {
    switch (int0) {
        case 0: {
            IF_SETOP(2, "Always Show Mode", comp(279, 6));  // mobile_ribbon_left:chat_wrapper
            IF_SETOP(3, "Hidden Mode", comp(279, 6));  // mobile_ribbon_left:chat_wrapper
            break;
        }
        case 1: {
            IF_SETOP(2, "Dynamic Mode", comp(279, 6));  // mobile_ribbon_left:chat_wrapper
            IF_SETOP(3, "Hidden Mode", comp(279, 6));  // mobile_ribbon_left:chat_wrapper
            break;
        }
        case 2: {
            IF_SETOP(2, "Dynamic Mode", comp(279, 6));  // mobile_ribbon_left:chat_wrapper
            IF_SETOP(3, "Always Show Mode", comp(279, 6));  // mobile_ribbon_left:chat_wrapper
            break;
        }
    };
    return;
}