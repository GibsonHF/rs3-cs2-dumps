//[clientscript,objdialog_reset]
function script570(string0: string): void {
    IF_SETHIDE(false, comp(389, 0));  // objdialog:root
    IF_SETHIDE(false, comp(389, 3));  // objdialog:resultlist_hide
    IF_SETOBJECT(-1 as obj, -1, comp(389, 9));  // objdialog:objgraphic
    varclient_2506 = "";
    IF_SETTEXT("*", comp(389, 7));  // objdialog:searchtext
    CC_DELETEALL(comp(389, 2));  // objdialog:resultlist
    IF_SETSCROLLSIZE(0, 0, comp(389, 2));  // objdialog:resultlist
    IF_SETSCROLLPOS(0, 0, comp(389, 2));  // objdialog:resultlist
    script7791(25493509, 25493506);
    IF_SETHIDE(true, comp(389, 5));  // objdialog:resultscrollbar
    IF_SETONDIALOGABORT(callback(script572), 25493511);
    script8841(27, 1);
    return;
}