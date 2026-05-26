//
function script14072(): void {
    if ((CC_FIND(33882423, 14) == 1)) {
        CC_SETTEXT(`Bank of Gielinor (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
        IF_SETONTIMER(callback(), 33882114);
    };
    return;
}