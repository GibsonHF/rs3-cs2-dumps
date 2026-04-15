//
function script10371(int0: component): void {
    var string0 = "Searching...";
    if ((varplayer_4699 != -1)) {
        string0 = `${inttostring(varplayer_4699, 10)} matches found.`;
    };
    IF_SETTEXT(string0, int0);
    return;
}