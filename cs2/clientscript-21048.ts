//
function script21048(): void {
    IF_SETHIDE(false, comp(1409, 6));  // league_parent_areas:map_area
    var string0 = enum_getvalue(0, 36, 9057 as cs2enum, varbitplayer_58391);
    IF_SETTEXT(`Region unlocks are permanent.<br>This is your final chance to change your mind.<br><br>Unlock this region: ${string0}`, comp(1409, 143));
    var string1 = "Unlock";
    stack(21096);
    stack(CLIENTCLOCK());
    stack(92340372);
    stack(92340373);
    stack(string1);
    IF_SETONTIMER("iiis", 92340372);
    IF_SETHIDE(false, comp(1409, 149));
    IF_SETTEXT("5...", comp(1409, 148));
    IF_SETENABLED(false, comp(1409, 148));
    IF_SETENABLED(false, comp(1409, 128));
    return;
}