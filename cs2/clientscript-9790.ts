//
function script9790(int0: number): void {
    if ((int0 == 1)) {
        IF_SETOPKEY(1, 13, 8, comp(744, 1));  // loginscreen:close_button
        IF_SETONTIMER(callback(script9791, 0), comp(744, 1));  // loginscreen:close_button
    } else {
        IF_SETOPKEY(1, -1, -1, comp(744, 1));  // loginscreen:close_button
        IF_SETONOP(callback(), comp(744, 1));  // loginscreen:close_button
    };
    return;
}