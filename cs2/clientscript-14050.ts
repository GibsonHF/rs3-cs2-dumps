//
function script14050(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_39864, 1), 127008770);
    IF_SETTEXT(`${TOSTRING_LOCALISED(MIN(varbitplayer_42923, (varbitplayer_39864 / MAX(1, varbitplayer_42922))), 1)}%`, 127008772);
    return;
}