//
function script3340(): void {
    var int0 = comp(518, 9);  // quest_wendle_secrets_deduction_notes:deduction_dropdown_build_layer
    if (((((((varbitplayer_60935 == 0) || (varbitplayer_60924 == 0)) || (varbitplayer_60929 == 0)) || (varbitplayer_60927 == 0)) || (varbitplayer_60933 == 0)) || (varbitplayer_60931 == 0))) {
        IF_SETHIDE(false, comp(518, 31));  // quest_wendle_secrets_deduction_notes:not_enough_info_text
        IF_SETHIDE(true, int0);
    } else {
        IF_SETHIDE(true, comp(518, 31));  // quest_wendle_secrets_deduction_notes:not_enough_info_text
        IF_SETHIDE(false, int0);
    };
    script7857(33947675, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062, "CHECK");
    CC_SETOP(1, "Check deductions");
    script3341();
    if ((script13749() == 1)) {
        IF_SETSCROLLSIZE(0, 443, int0);
        script7791(33947655, int0);
    };
    return;
}