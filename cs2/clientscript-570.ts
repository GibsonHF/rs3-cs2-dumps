//[clientscript,objdialog_reset]
function script570(string0: string): void {
    IF_SETHIDE(0, 25493504);
    IF_SETHIDE(0, 25493507);
    IF_SETOBJECT(-1, -1, 25493513);
    varclient_2506 = "";
    IF_SETTEXT("*", 25493511);
    CC_DELETEALL(25493506);
    IF_SETSCROLLSIZE(0, 0, 25493506);
    IF_SETSCROLLPOS(0, 0, 25493506);
    script7791(25493509, 25493506);
    IF_SETHIDE(1, 25493509);
    IF_SETONDIALOGABORT(callback(script572), 25493511);
    script8841(27, 1);
    return;
}