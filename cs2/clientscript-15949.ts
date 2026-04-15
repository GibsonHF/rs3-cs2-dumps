//
function script15949(): void {
    var int0 = ((IF_GETX(comp(274, 15)) - IF_GETX(comp(274, 11))) - 10);
    IF_SETSIZE(int0, 50, 0, 0, comp(274, 11));
    var int1 = -1 as fontmetrics;
    var int2 = 0;
    [int1, int2] = script5742(int0, CHAT_PLAYERNAME(), 16355 as cs2enum, 25, 11);
    if ((int2 <= int0)) {
        IF_SETTEXTFONT(int1, comp(274, 12));
        IF_SETTEXT(CHAT_PLAYERNAME(), comp(274, 12));
    } else {
        [int1, int2] = script5742(int0, CHAT_PLAYERNAME_UNFILTERED(), 16355 as cs2enum, 25, 11);
        IF_SETTEXTFONT(int1, comp(274, 12));
        IF_SETTEXT(CHAT_PLAYERNAME_UNFILTERED(), comp(274, 12));
    };
    return;
}