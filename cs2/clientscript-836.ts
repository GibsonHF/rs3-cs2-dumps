//
function script836(): void {
    var string0 = CHAT_PLAYERNAME();
    var int0 = (STRINGWIDTH(string0, 28 as fontmetrics) + 40);
    IF_SETTEXT(string0, comp(1311, 471));  // mtxmgt:name_text
    IF_SETSIZE(int0, 34, 0, 0, comp(1311, 470));  // mtxmgt:name_background
    return;
}