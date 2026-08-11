//[proc,objdialog_refreshsearch]
function script576(): void {
    IF_SETOBJECT(-1 as obj, -1, comp(389, 9));  // objdialog:objgraphic
    CC_DELETEALL(comp(389, 2));  // objdialog:resultlist
    if ((STRING_LENGTH(varclient_2506) > 0)) {
        IF_SETHIDE(true, comp(389, 3));  // objdialog:resultlist_hide
        script577(varclient_2506);
    } else {
        IF_SETHIDE(false, comp(389, 3));  // objdialog:resultlist_hide
        script578();
    };
    return;
}