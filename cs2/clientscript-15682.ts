//
function script15682(): void {
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51623), 794640, 0)} x ${inttostring(varbitplayer_51618, 10)}`, 67043354);
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51628), 794640, 0)} x ${inttostring(varbitplayer_51617, 10)}`, 67043358);
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51624), 794640, 0)} x ${inttostring(varbitplayer_51616, 10)}`, 67043362);
    IF_SETTEXT(`${dbrow_getfield(script7844(varbitplayer_51625), 794640, 0)} x ${inttostring(varbitplayer_51615, 10)}`, 67043366);
    script16784(varbitplayer_51622, varbitplayer_51618, 67043356);
    script16784(varbitplayer_51621, varbitplayer_51617, 67043360);
    script16784(varbitplayer_51620, varbitplayer_51616, 67043364);
    script16784(varbitplayer_51619, varbitplayer_51615, 67043368);
    if ((varbitplayer_51618 == varbitplayer_51622)) {
        IF_SETHIDE(0, 67043355);
    } else {
        IF_SETHIDE(1, 67043355);
    };
    if ((varbitplayer_51617 == varbitplayer_51621)) {
        IF_SETHIDE(0, 67043359);
    } else {
        IF_SETHIDE(1, 67043359);
    };
    if ((varbitplayer_51616 == varbitplayer_51620)) {
        IF_SETHIDE(0, 67043363);
    } else {
        IF_SETHIDE(1, 67043363);
    };
    if ((varbitplayer_51615 == varbitplayer_51619)) {
        IF_SETHIDE(0, 67043367);
    } else {
        IF_SETHIDE(1, 67043367);
    };
    return;
}