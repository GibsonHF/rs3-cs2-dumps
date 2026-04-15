//[proc,meslayer_mode6]
function script107(string0: string): void {
    if ((varclient_1413 == false)) {
        return;
    };
    if ((varclient_11 == true)) {
        printmessage("You can't do that while you're reporting abuse.");
        return;
    };
    IF_SETHIDE(false, comp(1469, 0));
    varclient_2367 = string0;
    IF_SETTEXT(`Enter message to send to ${varclient_2367}`, comp(1469, 3));
    varclient_5 = 6;
    script1564("");
    IF_SETONCLICK(callback(), comp(1469, 1));
    script2026();
    return;
}