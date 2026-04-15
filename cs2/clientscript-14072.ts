//
function script14072(): void {
    if ((CC_FIND(comp(517, 311), 14) == 1)) {
        CC_SETTEXT(`Bank of Gielinor (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
        IF_SETONTIMER(callback(), comp(517, 2));
    };
    return;
}