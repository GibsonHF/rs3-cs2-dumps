//[proc,objdialog_refreshsearch]
function script576(): void {
    IF_SETOBJECT(-1, -1, 25493513);
    CC_DELETEALL(25493506);
    if ((STRING_LENGTH(varclient_2506) > 0)) {
        IF_SETHIDE(1, 25493507);
        script577(varclient_2506);
    } else {
        IF_SETHIDE(0, 25493507);
        script578();
    };
    return;
}