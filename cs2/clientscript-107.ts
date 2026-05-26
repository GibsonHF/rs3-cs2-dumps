//[proc,meslayer_mode6]
function script107(string0: string): void {
    if ((varclient_1413 == false)) {
        return;
    };
    if ((varclient_11 == true)) {
        printmessage("You can't do that while you're reporting abuse.");
        return;
    };
    IF_SETHIDE(0, 96272384);
    varclient_2367 = string0;
    IF_SETTEXT(`Enter message to send to ${varclient_2367}`, 96272387);
    varclient_5 = 6;
    script1564("");
    IF_SETONCLICK(callback(), 96272385);
    script2026();
    return;
}