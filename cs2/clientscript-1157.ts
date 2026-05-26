//[clientscript,meslayer_mode12]
function script1157(int0: number): void {
    IF_SETHIDE(0, 96272384);
    if ((int0 != 1)) {
        return;
    };
    if ((script42(varclient_266) == 0)) {
        varclient_2409 = "";
        varclient_2410 = "";
        varclient_266 = true;
    };
    if ((STRING_LENGTH(varclient_2409) > 0)) {
        IF_SETTEXT("Edit the name of your caller:<br>(Delete it to disable this feature.)", 96272387);
    } else {
        IF_SETTEXT("Enter the name of your caller:", 96272387);
    };
    varclient_5 = 12;
    script1564(varclient_2409);
    IF_SETONCLICK(callback(script1805), 96272385);
    script2026();
    return;
}