//[clientscript,meslayer_mode13]
function script2463(string0: string, string1: string): void {
    IF_SETHIDE(false, comp(1469, 0));  // meslayer:root
    IF_SETTEXT(string0, comp(1469, 3));  // meslayer:mes_text
    varclient_5 = 13;
    script1564(string1);
    IF_SETONCLICK(callback(), comp(1469, 1));  // meslayer:mes_layer
    script2026();
    return;
}