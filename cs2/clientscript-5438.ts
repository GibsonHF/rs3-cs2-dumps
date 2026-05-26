//
function script5438(): void {
    var string0 = "";
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string1 = "";
    while ((int1 < ENUM_GETOUTPUTCOUNT(3620 as cs2enum))) {
        int2 = enum_getvalue(0, 0, 3620 as cs2enum, int1);
        string1 = script2103(enum_getvalue(0, 3, 2252 as cs2enum, int2));
        if ((script7073(int2) == 2)) {
            string0 = strconcat(string0, `<str=F5AF44><col=F5AF44>${string1}<br>`);
            int0 = (int0 + 1);
        } else {
            string0 = strconcat(string0, `${string1}<br>`);
        };
        int1 = (int1 + 1);
    };
    IF_SETTEXT(string0, comp(1166, 1));
    IF_SETTEXT(`Quests completed: ${inttostring(int0, 10)}. You need at least: ${inttostring(20, 10)}`, comp(1166, 2));
    return;
}