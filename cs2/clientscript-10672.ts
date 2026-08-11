//
function script10672(int0: number): void {
    IF_SETHIDE(true, comp(1543, 1));  // hw14_rewards:reward_layer
    IF_SETHIDE(true, comp(1543, 158));  // hw14_rewards:purchase_selected
    IF_SETHIDE(true, comp(1543, 2));  // hw14_rewards:explanation_layer
    IF_SETHIDE(true, comp(1543, 175));  // hw14_rewards:explain_selected
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1543, 1));  // hw14_rewards:reward_layer
            IF_SETHIDE(false, comp(1543, 158));  // hw14_rewards:purchase_selected
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1543, 2));  // hw14_rewards:explanation_layer
            IF_SETHIDE(false, comp(1543, 175));  // hw14_rewards:explain_selected
            break;
        }
    };
    return;
}