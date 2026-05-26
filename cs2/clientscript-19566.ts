//
function script19566(): void {
    if ((CC_FIND(comp(1313, 118), 14) == 1)) {
        CC_SETTEXT(`${varclient_8166} Storage (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
        IF_SETONTIMER(callback(), comp(1313, 4));
    };
    return;
}