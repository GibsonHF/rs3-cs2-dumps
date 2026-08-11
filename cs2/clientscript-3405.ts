//[clientscript,lobbyscreen_chat_handler]
function script3405(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    var int4 = -1;
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var int8 = -1;
    var int9 = script13749();
    [int3, int4, int5, int6, int7, int8] = script15598();
    if ((int9 == 0)) {
        if ((int0 != -1)) {
            script3054(int0, 59572266, 59572267);
        };
        if ((int2 != -1)) {
            script4567(int2, 38600739, 38600740);
        };
        if ((int1 != -1)) {
            script3173(int1, 59768860, 59768861);
        };
        if ((IF_GETHIDE(comp(906, 46)) == true)) {  // lobbyscreen:friendslist_panel
            if (((varclient_1275 != int3) || (varclient_1275 >= 200))) {
                script15601(2, int4);
            };
        };
        if ((IF_GETHIDE(comp(906, 48)) == true)) {  // lobbyscreen:clanchat_panel
            if (((varclient_1276 != int5) || (varclient_1276 >= 200))) {
                script15601(4, int6);
            };
        };
        if ((IF_GETHIDE(comp(906, 47)) == true)) {  // lobbyscreen:friendschat_panel
            if (((varclient_1510 != int7) || (varclient_1510 >= 200))) {
                script15601(3, int8);
            };
        };
        varclient_1275 = int3;
        varclient_1276 = int5;
        varclient_1510 = int7;
    } else {
        script3054(68419592, 68419595, 68419596);
    };
    return;
}