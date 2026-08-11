//
function script6959(int0: number, int1: number, int2: number): void {
    if ((varbitplayer_27703 > 0)) {
        IF_SETHIDE(true, comp(1614, 142));  // mm15_tasklist:skip_task_btn_disabled_layer
    };
    IF_SETTEXT(struct_getparam(int0, 5027), comp(1614, 3));  // mm15_tasklist:task_number
    IF_SETTEXT(enum_getvalue(0, 36, 9983, struct_getparam(int0, 5028)), 105775108);
    IF_SETTEXT(struct_getparam(int0, 5029), 105775109);
    return;
}