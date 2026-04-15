//[clientscript,objdialog_reset]
function script570(string0: unknown_string): void {
    IF_SETHIDE(false, comp(389, 0));
    IF_SETHIDE(false, comp(389, 3));
    IF_SETOBJECT(-1 as obj, -1, comp(389, 9));
    varclient_2506 = "";
    IF_SETTEXT("*", comp(389, 7));
    CC_DELETEALL(comp(389, 2));
    IF_SETSCROLLSIZE(0, 0, comp(389, 2));
    IF_SETSCROLLPOS(0, 0, comp(389, 2));
    script7791(comp(389, 5), comp(389, 2));
    IF_SETHIDE(true, comp(389, 5));
    IF_SETONDIALOGABORT(callback(script572), 25493511);
    script8841(27, 1);
    return;
}