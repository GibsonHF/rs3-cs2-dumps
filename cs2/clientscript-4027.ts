//
function script4027(int0: number, int1: number): void {
    if ((script4550(847) == 0)) {
        return;
    };
    if ((int0 == 1)) {
        script8844(1, 13, 8, 55509025, -1);
        IF_SETONKEY(callback(script4102, -2147483640, int1), comp(847, 28));  // modal_confirm:mainmodal_window_content
    } else {
        IF_SETOPKEY(1, 0, 0, comp(847, 33));  // modal_confirm:mainmodal_window_close_button
        IF_SETONKEY(callback(), comp(847, 28));  // modal_confirm:mainmodal_window_content
    };
    return;
}