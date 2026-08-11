//
function script4283(): void {
    IF_SETTEXT(ACTIVECLANSETTINGS_GETCLANNAME(), comp(1095, 4));  // clan_join_invite:clan_name
    script4332(71761938, 71761939);
    script4334(71761941, 71761942);
    script4336(71761925);
    if ((strcmp(IF_GETTEXT(comp(1095, 5)), "") != 0)) {  // clan_join_invite:clan_motto
        IF_SETTEXT(strconcat("'", strconcat(IF_GETTEXT(comp(1095, 5)), "'")), comp(1095, 5));  // clan_join_invite:clan_motto
    };
    IF_SETTEXT(`Size: ${inttostring(ACTIVECLANSETTINGS_GETAFFINEDCOUNT(), 10)}`, comp(1095, 8));  // clan_join_invite:clan_size
    var string0 = "Home World: Not Set";
    if ((varbitclansettings_8805 > 0)) {
        string0 = `Home World: ${enum_getvalue(0, 36, 3700 as cs2enum, varbitclansettings_8805)}`;
    };
    IF_SETTEXT(string0, comp(1095, 9));  // clan_join_invite:clan_home_world
    script12226(71761920);
    IF_SETTEXT(`<u=A0B6C0>${IF_GETTEXT(comp(1095, 0))}`, comp(1095, 0));  // clan_join_invite:clan_homepage_link
    script4329(71761921);
    IF_SETTEXT("<u=A0B6C0>Clan Thread", comp(1095, 1));  // clan_join_invite:clan_forum_link
    IF_SETHIDE(true, comp(1095, 14));  // clan_join_invite:clan_data_waiting
    return;
}