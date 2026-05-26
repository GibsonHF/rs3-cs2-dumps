//
function script19566(): void {
    if ((CC_FIND(86048886, 14) == 1)) {
        CC_SETTEXT(`${varclient_8166} Storage (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
        IF_SETONTIMER(callback(), 86048772);
    };
    return;
}