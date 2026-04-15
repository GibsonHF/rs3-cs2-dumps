//[proc,meslayer_mode14]
function script3685(): void {
    if ((varclient_11 == true)) {
        printmessage("You can't do that while you're reporting abuse.");
        return;
    };
    IF_SETHIDE(false, comp(1469, 0));
    IF_SETTEXT("Enter the name of the song you wish to search for:", comp(1469, 3));
    varclient_5 = 14;
    script1564("");
    IF_SETONCLICK(callback(), comp(1469, 1));
    script2026();
    return;
}