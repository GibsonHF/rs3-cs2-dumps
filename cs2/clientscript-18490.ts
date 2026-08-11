//
function script18490(int0: number, int1: number, string0: string): void {
    if ((int0 != comp(-1, 65535))) {
        IF_SETTEXT(string0, int0);
        if (((MAP_LANG() != 0) || (STRING_LENGTH(string0) > 30))) {
            IF_SETTEXTFONT(57 as fontmetrics, int0);
        } else {
            IF_SETTEXTFONT(58 as fontmetrics, int0);
        };
    };
    var string1 = "";
    if ((int1 != -1)) {
        string1 = `${string0}/Quick guide`;
        IF_SETONBUTTONCLICK(callback(script7808, string1), int1);
    } else if ((int0 == comp(1500, 21))) {  // quest_journal:title
        IF_SETHIDE(true, comp(1500, 2));  // quest_journal:journal_wiki_layer
        IF_SETHIDE(true, comp(1500, 14));  // quest_journal:quest_overview
        IF_SETHIDE(true, comp(1500, 7));  // quest_journal:history_1
    };
    return;
}