//
function script4283(): void {
    stack(ACTIVECLANSETTINGS_GETCLANNAME());
    IF_SETTEXT(71761924);
    script4332(71761938, 71761939);
    script4334(71761941, 71761942);
    script4336(71761925);
    if ((strcmp(IF_GETTEXT(71761925), "") != 0)) {
        IF_SETTEXT(strconcat("'", strconcat(IF_GETTEXT(comp(1095, 5)), "'")), comp(1095, 5));
    };
    IF_SETTEXT(`Size: ${inttostring(ACTIVECLANSETTINGS_GETAFFINEDCOUNT(), 10)}`, comp(1095, 8));
    var string0 = "Home World: Not Set";
    if ((varbitclansettings_8805 > 0)) {
        string0 = `Home World: ${enum_getvalue(0, 36, 3700 as cs2enum, varbitclansettings_8805)}`;
    };
    IF_SETTEXT(string0, comp(1095, 9));
    script12226(comp(1095, 0));
    IF_SETTEXT(`<u=A0B6C0>${IF_GETTEXT(comp(1095, 0))}`, comp(1095, 0));
    script4329(comp(1095, 1));
    IF_SETTEXT("<u=A0B6C0>Clan Thread", comp(1095, 1));
    IF_SETHIDE(true, comp(1095, 14));
    return;
}