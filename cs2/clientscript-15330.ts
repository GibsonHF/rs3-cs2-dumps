//
function script15330(int0: number, int1: number): void {
    CC_DELETEALL(comp(1852, 35));
    IF_SETHIDE(true, comp(1852, 15));
    IF_SETHIDE(true, comp(1852, 16));
    if (((int0 == -1 as achievement) && (int1 == -1 as achievement))) {
        CC_CREATE(comp(1852, 35), 4, 0);
        CC_SETTEXT("You have no achievements close to completion.");
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(10, 10, 1, 1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(script693(255, 255, 255));
    };
    var int2 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if ((int0 != -1 as achievement)) {
        IF_SETHIDE(false, comp(1852, 15));
        int2 = ACHIEVEMENT_REQSTATE(int0);
        varclient_5993 = int2;
        script13310(121372745, 121372739, 2, (8 * 1000));
        string2 = ACHIEVEMENT_GETNAME(int0);
        IF_SETTEXT(string2, comp(1852, 40));
        IF_SETGRAPHIC(ACHIEVEMENT_SPRITE(int0), comp(1852, 39));
        string0 = strconcat(inttostring((int2 / 100), 10), "%");
        IF_SETTEXT(string0, comp(1852, 41));
        string1 = script15321(int0);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), comp(1852, 15));
        IF_SETOPBASE(string2, comp(1852, 15));
        IF_SETOPCURSOR(1, 210, comp(1852, 15));
    };
    if ((int1 != -1 as achievement)) {
        IF_SETHIDE(false, comp(1852, 16));
        int2 = ACHIEVEMENT_REQSTATE(int1);
        varclient_5994 = int2;
        script13310(121372750, 121372741, 3, (8 * 1000));
        string2 = ACHIEVEMENT_GETNAME(int1);
        IF_SETTEXT(string2, comp(1852, 37));
        IF_SETGRAPHIC(ACHIEVEMENT_SPRITE(int1), comp(1852, 36));
        string0 = strconcat(inttostring((int2 / 100), 10), "%");
        IF_SETTEXT(string0, comp(1852, 38));
        string1 = script15321(int1);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), comp(1852, 16));
        IF_SETOPBASE(string2, comp(1852, 16));
        IF_SETOPCURSOR(1, 210, comp(1852, 16));
    };
    return;
}