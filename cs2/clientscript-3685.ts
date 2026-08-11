//[proc,meslayer_mode14]
function script3685(): void {
    if ((varclient_11 == true)) {
        printmessage("You can't do that while you're reporting abuse.");
        return;
    };
    IF_SETHIDE(false, comp(1469, 0));  // meslayer:root
    IF_SETTEXT("Enter the name of the song you wish to search for:", comp(1469, 3));  // meslayer:mes_text
    varclient_5 = 14;
    script1564("");
    IF_SETONCLICK(callback(), comp(1469, 1));  // meslayer:mes_layer
    script2026();
    return;
}