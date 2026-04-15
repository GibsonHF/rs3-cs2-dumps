//[clientscript,lobbyscreen_chat_handler]
function script3405(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = -1;
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var int8 = -1;
    var int9 = script13749();
    [int3, int4, int5, int6, int7, int8] = script15598();
    if ((int9 == false)) {
        if ((int0 != -1)) {
            script3054(int0, comp(909, 42), comp(909, 43));
        };
        if ((int2 != -1)) {
            script4567(int2, comp(589, 35), comp(589, 36));
        };
        if ((int1 != -1)) {
            script3173(int1, comp(912, 28), comp(912, 29));
        };
        if (((IF_GETHIDE(comp(906, 46)) == true) && ((varclient_1275 != int3) || (varclient_1275 >= 200)))) {
            script15601(2, int4);
        };
        if (((IF_GETHIDE(comp(906, 48)) == true) && ((varclient_1276 != int5) || (varclient_1276 >= 200)))) {
            script15601(4, int6);
        };
        if (((IF_GETHIDE(comp(906, 47)) == true) && ((varclient_1510 != int7) || (varclient_1510 >= 200)))) {
            script15601(3, int8);
        };
        varclient_1275 = int3;
        varclient_1276 = int5;
        varclient_1510 = int7;
    } else {
        script3054(68419592, comp(1044, 11), comp(1044, 12));
    };
    return;
}