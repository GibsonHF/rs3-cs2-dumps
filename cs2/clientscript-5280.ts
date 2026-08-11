//
function script5280(): number {
    if ((IF_GETHIDE(comp(906, 144)) == false)) {  // lobbyscreen:report_abuse_stage1
        return 1;
    };
    if ((IF_GETHIDE(comp(906, 145)) == false)) {  // lobbyscreen:report_abuse_stage2
        return 1;
    };
    if ((IF_GETHIDE(comp(906, 146)) == false)) {  // lobbyscreen:report_abuse_ignore
        return 1;
    };
    return 0;
}