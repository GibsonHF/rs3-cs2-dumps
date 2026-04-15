//[clientscript,lobbyscreen_load]
function script3057(): void {
    var int0 = script2948();
    if (((((int0 == 42) || (int0 == 43)) || (varclient_1100 == 42)) || (varclient_1100 == 43))) {
        varclient_1100 = -1;
        LOGIN_RESETREPLY();
    };
    script15717();
    if ((script13749() == true)) {
        varbitplayer_38842 = 1;
    } else {
        varbitplayer_38842 = 0;
    };
    varbitplayer_22875 = 0;
    varbitclient_22876 = 0;
    varbitclient_43686 = 0;
    IF_SETONTIMER(callback(script6347, varplayer_1754), comp(906, 0));
    varclient_3937 = -1;
    varclient_3938 = -1;
    varclient_3939 = -1;
    varclient_3940 = -1;
    varclient_3941 = -1;
    varclient_3942 = -1;
    varclient_4503 = -1;
    varclient_3943 = -1;
    varclient_4298 = -1;
    varclient_1275 = -1;
    varclient_1276 = -1;
    varclient_1510 = -1;
    varclient_6885 = 0;
    script14175();
    return;
}