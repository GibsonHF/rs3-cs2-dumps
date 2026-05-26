//
function script1292(int0: number): void {
    IF_SETHIDE(0, 4194390);
    IF_SETHIDE(0, 4194371);
    if ((int0 == 1)) {
        IF_SETTEXT("please wait...", 4194394);
    } else {
        IF_SETTEXT("generating...", 4194375);
    };
    IF_SETONKEY(callback(), 4194339);
    IF_SETONCLICK(callback(), 4194355);
    return;
}