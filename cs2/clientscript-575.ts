//[clientscript,objdialog_delay_timer]
function script575(): void {
    varclient_81 = (varclient_81 - 1);
    if ((varclient_81 > 0)) {
        return;
    };
    IF_SETONTIMER(callback(), 25493511);
    script576();
    return;
}