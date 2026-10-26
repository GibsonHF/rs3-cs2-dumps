//
function script3001(): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int0] = USERDETAIL_LOBBY_MEMBERSHIP();
    if ((int0 == 0)) {
        if ((PLAYERMEMBER() == true)) {
            int3 = (int2 / 1440);
            IF_SETTEXT("Member", comp(814, 21));  // lobbyscreen_mobile_billing_info:members_type
            if ((int3 == 0)) {
                IF_SETTEXT("Expires in less than 1 day", comp(814, 22));  // lobbyscreen_mobile_billing_info:members_time
            } else {
                IF_SETTEXT(`Expires in ${inttostring(int3, 10)} ${script4583(int3, "day", "days")}`, comp(814, 22));  // lobbyscreen_mobile_billing_info:members_time
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
    var int4 = USERDETAIL_LOBBY_LASTLOGINDAY();
    if ((int4 == 0)) {
        IF_SETTEXT("Welcome to RuneScape!", comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT("Welcome to RuneScape!", comp(814, 4));  // lobbyscreen_mobile_billing_info:title_last
        IF_SETTEXT("", comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
        return;
    };
    var int5 = (DATE_RUNEDAY() - int4);
    if ((int5 < 1)) {
        IF_SETTEXT("You last logged in earlier today.", comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT("earlier today", comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    } else if ((int5 == 1)) {
        IF_SETTEXT("You last logged in yesterday.", comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT("yesterday", comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    } else {
        IF_SETTEXT(`You last logged in ${inttostring(int5, 10)} days ago.`, comp(906, 119));  // lobbyscreen:login_address
        IF_SETTEXT(`${inttostring(int5, 10)} days ago`, comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    };
    var int6 = comp(814, 4);  // lobbyscreen_mobile_billing_info:title_last
    var int7 = PARAWIDTH(IF_GETTEXT(int6), IF_GETWIDTH(int6), IF_GETFONTMETRICS(int6));
    IF_SETPOSITION(int7, 0, 0, 1, comp(814, 5));  // lobbyscreen_mobile_billing_info:last_date
    return;
}