//
function script15400(): void {
    var int0 = script15392(varbitplayer_48371);
    var string0 = dbrow_getfield(int0, 475168, 0);
    var string1 = dbrow_getfield(int0, 475184, 0);
    var string2 = enum_getvalue(0, 36, 16104 as cs2enum, varbitplayer_48373);
    var int1 = -1;
    if ((varbitplayer_48371 > 0)) {
        IF_SETTEXT(string0, 48234500);
        IF_SETTEXT(string1, 48234511);
        IF_SETTEXT(string2, 48234510);
        IF_SETTEXT(`XP Reward: ${TOSTRING_LOCALISED((dbrow_getfield(int0, 475328, 0) / 10), 1)}`, 48234520);
        IF_SETHIDE(0, 48234501);
        while ((++int1 < 5)) {
            script15401(int0, int1);
        };
    } else {
        IF_SETTEXT("Contract complete.", 48234500);
        IF_SETTEXT("Head over to any estate agent to pick up a contract.", 48234511);
        IF_SETHIDE(1, 48234501);
    };
    return;
}