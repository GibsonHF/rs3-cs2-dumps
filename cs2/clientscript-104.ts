//[clientscript,meslayer_mode3]
function script104(): void {
    if ((varclient_1413 == false)) {
        return;
    };
    if ((varclient_11 == true)) {
        script675();
    };
    IF_SETHIDE(false, comp(1469, 0));
    IF_SETTEXT("Enter name of friend to delete from list", comp(1469, 3));
    varclient_5 = 3;
    script1564("");
    IF_SETONCLICK(callback(), comp(1469, 1));
    script2026();
    return;
}