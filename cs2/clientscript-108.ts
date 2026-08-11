//[clientscript,meslayer_mode7]
function script108(string0: string): void {
    IF_SETHIDE(false, comp(1469, 0));  // meslayer:root
    IF_SETTEXT(string0, comp(1469, 3));  // meslayer:mes_text
    varclient_5 = 7;
    script1564("");
    IF_SETONCLICK(callback(), comp(1469, 1));  // meslayer:mes_layer
    script2026();
    return;
}