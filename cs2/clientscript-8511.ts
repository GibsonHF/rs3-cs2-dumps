//
function script8511(int0: int): void {
    var int1 = 0;
    if ((STRING_LENGTH(varclient_2505) <= 0)) {
        if ((STRING_LENGTH(varclient_2367) <= 0)) {
            if ((varclient_183 > (CLIENTCLOCK() - 100))) {
                return;
            };
            MES_TYPED(script8526(int0), 0, "You have no messages to reply to.");
            varclient_183 = CLIENTCLOCK();
            return;
        };
        varclient_2505 = varclient_2367;
    };
    int1 = FRIEND_GETSLOTFROMNAME(varclient_2505);
    if ((int1 != -1)) {
        if (((MAP_QUICKCHAT() == 0) && (USERDETAIL_QUICKCHAT() == 0))) {
            script8512(int0, varclient_2505);
            if ((int0 == 18)) {
                script1566(0, "", 255);
            };
        } else {
            script16634(int1, varclient_2505, int0);
        };
    };
    return;
}