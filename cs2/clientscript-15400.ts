//
function script15400(): void {
    var int0 = script15392(varbitplayer_48371);
    var string0 = dbrow_getfield(int0, 475168, 0);
    var string1 = dbrow_getfield(int0, 475184, 0);
    var string2 = enum_getvalue(0, 36, 16104 as cs2enum, varbitplayer_48373);
    var int1 = -1;
    if ((varbitplayer_48371 > 0)) {
        IF_SETTEXT(string0, comp(736, 4));
        IF_SETTEXT(string1, comp(736, 15));
        IF_SETTEXT(string2, comp(736, 14));
        IF_SETTEXT(`XP Reward: ${TOSTRING_LOCALISED((dbrow_getfield(int0, 475328, 0) / 10), 1)}`, comp(736, 24));
        IF_SETHIDE(false, comp(736, 5));
        while ((++int1 < 5)) {
            script15401(int0, int1);
        };
    } else {
        IF_SETTEXT("Contract complete.", comp(736, 4));
        IF_SETTEXT("Head over to any estate agent to pick up a contract.", comp(736, 15));
        IF_SETHIDE(true, comp(736, 5));
    };
    return;
}