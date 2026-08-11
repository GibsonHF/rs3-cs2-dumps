//
function script6151(string0: string): void {
    IF_SETTEXT(string0, comp(1268, 1));  // fremsaga_bilrach_title:title_text
    varclient_1888 = 0;
    IF_SETONTIMER(callback(script6152, 1), comp(1268, 0));  // fremsaga_bilrach_title:title_background
    return;
}