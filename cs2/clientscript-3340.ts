//
function script3340(): void {
    if (((((((varbitplayer_60935 == 0) || (varbitplayer_60924 == 0)) || (varbitplayer_60929 == 0)) || (varbitplayer_60927 == 0)) || (varbitplayer_60933 == 0)) || (varbitplayer_60931 == 0))) {
        IF_SETHIDE(false, comp(518, 30));
        IF_SETHIDE(true, comp(518, 8));
    } else {
        IF_SETHIDE(true, comp(518, 30));
        IF_SETHIDE(false, comp(518, 8));
    };
    script7857(33947657, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062, "CHECK DEDUCTIONS");
    CC_SETOP(1, "Check deductions");
    script3341();
    return;
}