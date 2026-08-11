//
function script2075(): void {
    var int0 = 0;
    if ((varclient_632 == 0)) {
        if (((5 - varclient_633) > 0)) {
            int0 = (5 - varclient_633);
        } else {
            int0 = 0;
        };
        IF_SETTEXT(inttostring(int0, 10), comp(837, 5));  // snp_waiting_room:text_blueteam_count
    } else {
        IF_SETTEXT(inttostring(varclient_637, 10), comp(837, 5));  // snp_waiting_room:text_blueteam_count
    };
    return;
}