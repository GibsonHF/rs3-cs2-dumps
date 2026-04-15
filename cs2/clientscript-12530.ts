//
function script12530(): void {
    var string0 = "";
    var string1 = "";
    var int0 = 0;
    switch (varplayer_6269) {
        case 1: {
            string0 = "Dwarven Technology";
            string1 = "Dwarven Currency:";
            int0 = varbitplayer_31354;
            break;
        }
        case 2: {
            string0 = "Goblin Technology";
            string1 = "Goblin Currency:";
            int0 = varbitplayer_31355;
            break;
        }
    };
    script9554(comp(1762, 23), comp(1762, 35), comp(1762, 24), string0, 21218 as struct);
    IF_SETTEXT(string1, comp(1762, 20));
    IF_SETSIZE(STRINGWIDTH(string1, IF_GETFONTMETRICS(comp(1762, 20))), IF_GETHEIGHT(comp(1762, 20)), 0, 0, comp(1762, 20));
    IF_SETTEXT(inttostring(int0, 10), comp(1762, 21));
    var int1 = ((IF_GETX(comp(1762, 20)) + IF_GETWIDTH(comp(1762, 20))) + 5);
    IF_SETPOSITION(int1, IF_GETY(comp(1762, 21)), 0, 0, comp(1762, 21));
    IF_SETONVARTRANSMIT(callback(script12531, 6268, 1), comp(1762, 21));
    IF_SETSIZE(STRINGWIDTH(IF_GETTEXT(115474465), IF_GETFONTMETRICS(115474465)), IF_GETHEIGHT(115474465), 0, 0, 115474465);
    int1 = ((IF_GETX(115474465) + IF_GETWIDTH(115474465)) + 5);
    IF_SETPOSITION(int1, IF_GETY(115474466), 0, 0, 115474466);
    return;
}