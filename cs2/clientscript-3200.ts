//
function script3200(int0: int): void {
    if ((STRING_LENGTH(varclient_2481) > 0)) {
        stack(varclient_2481);
        stack(int0);
        stack(varclient_6);
        stack("");
        CHAT_SENDABUSEREPORT();
    };
    script3194();
    if ((((STRING_LENGTH(varclient_2481) > 0) && (IGNORE_TEST(varclient_2481) == 0)) && (strcmp(varclient_2481, CHAT_PLAYERNAME()) != 0))) {
        if ((int0 == 5)) {
            varclient_1094 = true;
        };
        script3203();
    } else {
        varclient_1094 = false;
        if ((int0 == 5)) {
            script2190("", "Open a bug report form?<br>(opens a new window)", 0, 6, "", "", 1);
        };
    };
    return;
}