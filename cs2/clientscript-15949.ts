//
function script15949(): void {
    var int0 = ((IF_GETX(17956879) - IF_GETX(17956875)) - 10);
    IF_SETSIZE(int0, 50, 0, 0, 17956875);
    var int1 = -1;
    var int2 = 0;
    [int1, int2] = script5742(int0, CHAT_PLAYERNAME(), 16355, 25, 11);
    if ((int2 <= int0)) {
        IF_SETTEXTFONT(int1, 17956876);
        IF_SETTEXT(CHAT_PLAYERNAME(), 17956876);
    } else {
        [int1, int2] = script5742(int0, CHAT_PLAYERNAME_UNFILTERED(), 16355, 25, 11);
        IF_SETTEXTFONT(int1, 17956876);
        IF_SETTEXT(CHAT_PLAYERNAME_UNFILTERED(), 17956876);
    };
    return;
}