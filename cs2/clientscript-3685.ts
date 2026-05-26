//[proc,meslayer_mode14]
function script3685(): void {
    if ((varclient_11 == true)) {
        printmessage("You can't do that while you're reporting abuse.");
        return;
    };
    IF_SETHIDE(0, 96272384);
    IF_SETTEXT("Enter the name of the song you wish to search for:", 96272387);
    varclient_5 = 14;
    script1564("");
    IF_SETONCLICK(callback(), 96272385);
    script2026();
    return;
}