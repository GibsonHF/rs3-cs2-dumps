//[clientscript,meslayer_mode12]
function script1157(int0: unknown_int): void {
    IF_SETHIDE(false, comp(1469, 0));
    if ((int0 != 1)) {
        return;
    };
    if ((script42(varclient_266) == 0)) {
        varclient_2409 = "";
        varclient_2410 = "";
        varclient_266 = true;
    };
    if ((STRING_LENGTH(varclient_2409) > 0)) {
        IF_SETTEXT("Edit the name of your caller:<br>(Delete it to disable this feature.)", comp(1469, 3));
    } else {
        IF_SETTEXT("Enter the name of your caller:", comp(1469, 3));
    };
    varclient_5 = 12;
    script1564(varclient_2409);
    IF_SETONCLICK(callback(script1805), comp(1469, 1));
    script2026();
    return;
}