//
function script6960(): void {
    if ((varbitplayer_27703 == 0)) {
        IF_SETHIDE(false, comp(1614, 142));  // mm15_tasklist:skip_task_btn_disabled_layer
    };
    if ((varbitplayer_27703 != 1)) {
        IF_SETTEXT(`You have ${inttostring(varbitplayer_27703, 10)} Chits`, comp(1614, 7));  // mm15_tasklist:skip_credit
    } else {
        IF_SETTEXT("You have 1 Chit", comp(1614, 7));  // mm15_tasklist:skip_credit
    };
    return;
}