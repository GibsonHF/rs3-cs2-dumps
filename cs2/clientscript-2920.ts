//
function script2920(int0: number, int1: number, string0: string): void {
    script3181();
    if ((STRING_LENGTH(string0) > 0)) {
        varclient_2478 = REMOVETAGS(string0);
    } else {
        varclient_2478 = "";
    };
    IF_SETTEXT(varclient_2478, comp(914, 3));  // lobbyscreen_report_abuse_stage1:name
    if ((IF_GETHIDE(enum_getvalue(0, 9, script17126(), 4)) == 0)) {
        script3161(0);
    };
    IF_SETONKEY(callback(script3185, -2147483640, -2147483639, -2147483645), comp(914, 3));  // lobbyscreen_report_abuse_stage1:name
    varclient_1097 = STRING_LENGTH(varclient_2478);
    script1566(0, varclient_2478, 12);
    IF_SETONCLICK(callback(script1878, -2147483647, 59899907, 59899908), comp(914, 3));  // lobbyscreen_report_abuse_stage1:name
    script1879(59899907, 59899908, varclient_2478);
    IF_SETHIDE(true, comp(914, 4));  // lobbyscreen_report_abuse_stage1:name_caret
    if ((int0 == 1)) {
        script7886(59899916, 1, 1, varclient_6);
        if (((int1 == 5) || (int1 == 6))) {
            IF_SETTEXT("Suggest to temporarily mute this player", comp(914, 12));  // lobbyscreen_report_abuse_stage1:mute_checkbox
        } else {
            IF_SETTEXT("Temporarily mute this player", comp(914, 12));  // lobbyscreen_report_abuse_stage1:mute_checkbox
        };
        IF_SETHIDE(false, comp(914, 12));  // lobbyscreen_report_abuse_stage1:mute_checkbox
    } else {
        IF_SETHIDE(true, comp(914, 12));  // lobbyscreen_report_abuse_stage1:mute_checkbox
    };
    IF_SETHIDE(false, comp(906, 144));  // lobbyscreen:report_abuse_stage1
    return;
}