//
function script3001(): void {
    var string0 = "Membership";
    var string1 = "";
    var string2 = "";
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string3 = "";
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string4 = "";
    [int1, int2, int0] = USERDETAIL_LOBBY_MEMBERSHIP();
    if ((int0 == 0)) {
        if ((PLAYERMEMBER() == true)) {
            string3 = FORMAT_DATETIME_FROM_MINUTES(int1);
            int3 = (int2 / 1440);
            int4 = (MODULO(int2, 1440) / 60);
            int5 = MODULO(int2, 60);
            if ((((int3 + int4) + int5) != 0)) {
                string4 = ` (in ${script4582(int3, int4, int5)})`;
            };
            string1 = `Expires ${string3}`;
            string2 = `Your membership will expire on ${string3}${string4}. Renew now to avoid losing member status. Use this button to renew.`;
            script10059(string0, string1, string2, 59375753);
            IF_SETTEXT("Member", comp(814, 21));  // lobbyscreen_mobile_billing_info:members_type
            if ((int3 == 0)) {
                IF_SETTEXT(`Expires in ${script11479(0, int4, int3)}`, comp(814, 22));  // lobbyscreen_mobile_billing_info:members_time
            } else {
                IF_SETTEXT(`Expires in ${inttostring(int3, 10)} days`, comp(814, 22));  // lobbyscreen_mobile_billing_info:members_time
            };
            IF_SETGRAPHIC(12978 as graphic, comp(814, 20));  // lobbyscreen_mobile_billing_info:members_icon
            script6865(53346325, -1, 0);
            script6865(53346326, -1, 6);
        } else {
            IF_SETTEXT("Non-Member", comp(814, 21));  // lobbyscreen_mobile_billing_info:members_type
            IF_SETTEXT("", comp(814, 22));  // lobbyscreen_mobile_billing_info:members_time
            IF_SETGRAPHIC(12979 as graphic, comp(814, 20));  // lobbyscreen_mobile_billing_info:members_icon
            script6865(53346325, -1, 6);
        };
    } else {
        IF_SETTEXT("Member", comp(814, 21));  // lobbyscreen_mobile_billing_info:members_type
        IF_SETTEXT("", comp(814, 22));  // lobbyscreen_mobile_billing_info:members_time
        IF_SETGRAPHIC(12978 as graphic, comp(814, 20));  // lobbyscreen_mobile_billing_info:members_icon
        script6865(53346325, -1, 0);
        script6865(53346326, -1, 2);
    };
    IF_SETTEXT(CHAT_PLAYERNAME(), comp(814, 2));  // lobbyscreen_mobile_billing_info:player_name
    var int6 = USERDETAIL_LOBBY_LASTLOGINDAY();
    if ((int6 == 0)) {
        IF_SETTEXT("Welcome to RuneScape!", comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT("Welcome to RuneScape!", comp(814, 4));  // lobbyscreen_mobile_billing_info:title_last
        IF_SETTEXT("", comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
        return;
    };
    var int7 = (DATE_RUNEDAY() - int6);
    if ((int7 < 1)) {
        IF_SETTEXT("You last logged in earlier today.", comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT("earlier today", comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    } else if ((int7 == 1)) {
        IF_SETTEXT("You last logged in yesterday.", comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT("yesterday", comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    } else {
        IF_SETTEXT(`You last logged in ${inttostring(int7, 10)} days ago.`, comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT(`${inttostring(int7, 10)} days ago`, comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    };
    var int8 = comp(814, 4);  // lobbyscreen_mobile_billing_info:title_last
    var int9 = PARAWIDTH(IF_GETTEXT(int8), IF_GETWIDTH(int8), IF_GETFONTMETRICS(int8));
    IF_SETPOSITION(int9, 0, 0, 1, comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    return;
}