//[clientscript,meslayer_mode4]
function script105(): void {
    if ((varclient_1413 == false)) {
        return;
    };
    if ((varclient_11 == true)) {
        script675();
    };
    IF_SETHIDE(false, comp(1469, 0));
    IF_SETTEXT("Enter name of player to add to list", comp(1469, 3));
    varclient_5 = 4;
    script1564("");
    IF_SETONCLICK(callback(), comp(1469, 1));
    script2026();
    return;
}