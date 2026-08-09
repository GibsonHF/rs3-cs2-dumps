//[proc,objdialog_close]
function script573(): void {
    CC_DELETEALL(comp(389, 2));
    IF_SETONDIALOGABORT(callback(), 25493511);
    IF_SETONTIMER(callback(), comp(389, 7));
    IF_SETHIDE(true, comp(389, 0));
    script8841(27, 0);
    script1364();
    return;
}