//
function script3194(): void {
    IF_SETHIDE(true, comp(906, 145));  // lobbyscreen:report_abuse_stage2
    IF_SETONKEY(callback(), comp(915, 1));  // lobbyscreen_report_abuse_stage2:mainmodal_window
    varclient_1094 = false;
    if ((IF_GETHIDE(enum_getvalue(0, 9, script17126(), 4)) == false)) {
        script3161(1);
    };
    return;
}