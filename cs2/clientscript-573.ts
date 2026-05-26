//[proc,objdialog_close]
function script573(): void {
    CC_DELETEALL(comp(389, 2));
    IF_SETONDIALOGABORT(callback(), 25493511);
    IF_SETONTIMER(callback(), 25493511);
    IF_SETHIDE(1, 25493504);
    script8841(27, 0);
    script1364();
    return;
}