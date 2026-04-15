//
function script15682(): void {
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51623), 794640, 0)} x ${inttostring(varbitplayer_51618, 10)}`, comp(1023, 26));
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51628), 794640, 0)} x ${inttostring(varbitplayer_51617, 10)}`, comp(1023, 30));
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51624), 794640, 0)} x ${inttostring(varbitplayer_51616, 10)}`, comp(1023, 34));
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51625), 794640, 0)} x ${inttostring(varbitplayer_51615, 10)}`, comp(1023, 38));
    script16784(varbitplayer_51622, varbitplayer_51618, 67043356);
    script16784(varbitplayer_51621, varbitplayer_51617, 67043360);
    script16784(varbitplayer_51620, varbitplayer_51616, 67043364);
    script16784(varbitplayer_51619, varbitplayer_51615, 67043368);
    if ((varbitplayer_51618 == varbitplayer_51622)) {
        IF_SETHIDE(false, comp(1023, 27));
    } else {
        IF_SETHIDE(true, comp(1023, 27));
    };
    if ((varbitplayer_51617 == varbitplayer_51621)) {
        IF_SETHIDE(false, comp(1023, 31));
    } else {
        IF_SETHIDE(true, comp(1023, 31));
    };
    if ((varbitplayer_51616 == varbitplayer_51620)) {
        IF_SETHIDE(false, comp(1023, 35));
    } else {
        IF_SETHIDE(true, comp(1023, 35));
    };
    if ((varbitplayer_51615 == varbitplayer_51619)) {
        IF_SETHIDE(false, comp(1023, 39));
    } else {
        IF_SETHIDE(true, comp(1023, 39));
    };
    return;
}