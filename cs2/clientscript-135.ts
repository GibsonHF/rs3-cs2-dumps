//[clientscript,snapshot_report]
function script135(int0: number): void {
    var int1 = -1;
    if ((STRING_LENGTH(varclient_2578) > 0)) {
        if ((int0 == 8)) {
            if ((strcmp(varclient_2578, varclient_6322) == 0)) {
                printmessage("Thank-you, your abuse report has been received.");
            } else {
                stack(varclient_2578);
                stack(int0);
                stack(varclient_6);
                stack("");
                CHAT_SENDABUSEREPORT();
                if ((int0 == 8)) {
                    varclient_6322 = varclient_2578;
                };
                varclient_6 = 0;
                script10416(38928399, 38928400, "", "", "", script42(varclient_6));
                script10416(38928447, 38928448, "", "", "", script42(varclient_6));
            };
        } else {
            stack(varclient_2578);
            stack(int0);
            stack(varclient_6);
            stack("");
            CHAT_SENDABUSEREPORT();
            if ((int0 == 8)) {
                varclient_6322 = varclient_2578;
            };
            varclient_6 = 0;
            script10416(38928399, 38928400, "", "", "", script42(varclient_6));
            script10416(38928447, 38928448, "", "", "", script42(varclient_6));
        };
    };
    if ((strcmp(varclient_2578, CHAT_PLAYERNAME()) == 0)) {
        script15197();
        return;
    };
    script1997();
    return;
}