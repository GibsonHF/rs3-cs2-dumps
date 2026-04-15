//
function script3207(int0: unknown_int): void {
    script3205();
    var int1 = 0;
    if ((IF_GETHIDE(enum_getvalue(0, 9, script17126(), 4)) == false)) {
        int1 = 1;
    };
    if (((int0 == 1) && (STRING_LENGTH(varclient_2481) > 0))) {
        if ((FRIEND_TEST(varclient_2481) == 1)) {
            if ((int1 == 0)) {
                MES_TYPED(26, 0, "Sorry, you cannot ignore players in your Friends List.");
            } else {
                MES_TYPED(26, 0, "Sorry, you cannot ignore players in your Friends List.");
            };
        } else {
            IGNORE_ADD_TEMP(varclient_2481);
            if ((int1 == 0)) {
                MES_TYPED(26, 0, `You are ignoring ${varclient_2481} until you log out.`);
            } else {
                MES_TYPED(26, 0, `You are ignoring ${varclient_2481} until you log out.`);
            };
        };
    };
    if ((varclient_1094 == true)) {
        script3015("", "Open a bug report form?<br>(opens a new window)", 6, "", "");
        varclient_1094 = false;
    };
    return;
}