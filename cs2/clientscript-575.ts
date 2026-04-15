//[clientscript,objdialog_delay_timer]
function script575(): void {
    varclient_81 = (varclient_81 - 1);
    if ((varclient_81 > 0)) {
        return;
    };
    IF_SETONTIMER(callback(), comp(389, 7));
    script576();
    return;
}