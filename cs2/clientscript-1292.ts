//
function script1292(int0: unknown_int): void {
    IF_SETHIDE(false, comp(64, 86));
    IF_SETHIDE(false, comp(64, 67));
    if ((int0 == 1)) {
        IF_SETTEXT("please wait...", comp(64, 90));
    } else {
        IF_SETTEXT("generating...", comp(64, 71));
    };
    IF_SETONKEY(callback(), comp(64, 35));
    IF_SETONCLICK(callback(), 4194355);
    return;
}