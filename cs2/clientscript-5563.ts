//
function script5563(): void {
    var int0 = (varplayer_3870 * varplayer_3869);
    var int1 = (INV_TOTAL(93, 29494) + varbitplayer_23016);
    var int2 = script17401();
    IF_SETTEXT(script17372(script17400(), 9, 1), 15073283);
    IF_SETTEXT(inttostring(int1, 10), 15073285);
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3869, 1), 15073280);
    IF_SETTEXT(inttostring(varplayer_3870, 10), 15073306);
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), 15073296);
    if ((int0 > int2)) {
        IF_SETCOLOUR(16711680, 15073296);
    } else {
        IF_SETCOLOUR(16777215, 15073296);
    };
    return;
}