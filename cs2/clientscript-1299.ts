//[proc,lobbyscreen_load]
function script1299(): void {
    varclient_2835 = -1;
    if ((script13749() == 1)) {
        script6543();
    };
    IF_SENDTOBACK(comp(906, 23));  // lobbyscreen:fader
    IF_SETONVARTRANSMIT(callback(script2354, 3184, 1), comp(906, 0));  // lobbyscreen:base
    IF_SETONVARTRANSMIT(callback(script5950, 1745, 1), comp(906, 16));  // lobbyscreen:subscribe_timer
    IF_SETONVARTRANSMIT(callback(script6270, 1305, 1), comp(906, 19));  // lobbyscreen:rebilling_listener
    IF_SETONVARCTRANSMIT(callback(script7732, 2771, 1), comp(906, 15));  // lobbyscreen:player_coord_preload_listener
    IF_SETONVARTRANSMIT(callback(script11090, 3184, 1), comp(906, 9));  // lobbyscreen:mute_message_listener
    IF_SETONVARTRANSMIT(callback(script11925, 6679, 1), comp(906, 17));  // lobbyscreen:bonds_listener
    IF_SETONVARTRANSMIT(callback(script11926, 6681, 1), comp(906, 18));  // lobbyscreen:wealth_listener
    if ((((varbitplayer_16467 < 1) && (USERDETAIL_QUICKCHAT() == 0)) && (varclient_3708 == 0))) {
        IF_SETONVARTRANSMIT(callback(script5937, 3185, 1), comp(906, 14));  // lobbyscreen:email_validation_listener
    };
    IF_SETTRANS(0, comp(906, 173));  // lobbyscreen:black_out_rect
    if ((script11370() == 0)) {
        IF_SETHIDE(false, comp(906, 149));  // lobbyscreen:under_13
    } else {
        IF_SETHIDE(true, comp(906, 149));  // lobbyscreen:under_13
    };
    IF_SETHIDE(false, comp(906, 24));  // lobbyscreen:main_bg
    IF_SETONRESIZE(callback(script4040), comp(906, 0));  // lobbyscreen:base
    var int0 = STRING_INDEXOF_STRING(varclient_2576, "@", 0);
    if ((int0 == -1)) {
        varclient_1414 = 1;
    } else {
        varclient_1414 = 2;
    };
    script3097();
    varclient_4270 = -1;
    script15612();
    if ((script13749() == 0)) {
        script10031(2);
        script10031(3);
        script10031(4);
        IF_SETONCHATTRANSMIT(callback(script3405, 59572263, 59768857, 38600736), 59375616);
    } else {
        IF_SETONCHATTRANSMIT(callback(script3405, 68419592, -1, -1), 59375616);
    };
    [varclient_1275, varclient_1276, varclient_1510] = script3406();
    script3060(0);
    script3064(1);
    if ((script13749() == 1)) {
        IF_SETGRAPHIC(11795 as graphic, comp(906, 94));  // lobbyscreen:login_favs_icon
    };
    varclient_2478 = "";
    varclient_547 = 0;
    printmessage("Welcome to RuneScape.");
    if ((USERDETAIL_QUICKCHAT() == 1)) {
        printmessage("Users restricted to quick-chat cannot send messages from the Lobby.");
    };
    script51();
    IF_SETONKEY(callback(script1328, -2147483640), comp(906, 0));  // lobbyscreen:base
    IF_SETONTIMER(callback(script15614, 59375623), comp(906, 7));  // lobbyscreen:entry_checks_timer
    stack(callback(script1868, 59375672));
    stack(59375638);
    IF_SETONMISCTRANSMIT();
    script4041();
    IF_SETONTIMER(callback(script5954, 59375789), comp(906, 21));  // lobbyscreen:blackout_timer
    if ((((LOGIN_REPLY() != 0) && (LOGIN_REPLY() != 2)) && (LOGIN_REPLY() != 15))) {
        script10210(59375697, MAP_WORLD(), CLIENTOPTION_GET(22), CLIENTOPTION_GET(23), CLIENTOPTION_GET(24), CLIENTOPTION_GET(25), CLIENTOPTION_GET(26), LOGIN_REPLY(), 2);
    };
    if ((LOBBY_ENTERGAMEREPLY() != -2)) {
        IF_SENDTOBACK(comp(906, 23));  // lobbyscreen:fader
        script10210(59375783, MAP_WORLD(), CLIENTOPTION_GET(22), CLIENTOPTION_GET(23), CLIENTOPTION_GET(24), CLIENTOPTION_GET(25), CLIENTOPTION_GET(26), LOBBY_ENTERGAMEREPLY(), 1);
        LOGIN_RESETREPLY();
        return;
    };
    script16901(0);
    return;
}