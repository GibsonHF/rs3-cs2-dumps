//[clientscript,meslayer_mode3]
function script104(): void {
    if ((varclient_1413 == false)) {
        return;
    };
    if ((varclient_11 == true)) {
        script675();
    };
    IF_SETHIDE(0, 96272384);
    IF_SETTEXT("Enter name of friend to delete from list", 96272387);
    varclient_5 = 3;
    script1564("");
    IF_SETONCLICK(callback(), 96272385);
    script2026();
    return;
}