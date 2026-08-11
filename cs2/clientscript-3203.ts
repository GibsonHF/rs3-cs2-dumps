//
function script3203(): void {
    IF_SETHIDE(false, comp(906, 146));  // lobbyscreen:report_abuse_ignore
    if ((IF_GETHIDE(enum_getvalue(0, 9, script17126(), 4)) == false)) {
        script3161(0);
    };
    IF_SETONKEY(callback(script3206, -2147483640), comp(913, 1));  // lobbyscreen_report_abuse_ignore:mainmodal_window
    return;
}