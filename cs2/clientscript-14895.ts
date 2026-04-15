//
function script14895(int0: dbrow, int1: int): void {
    var int2 = script14631(int0);
    var int3 = -1;
    var string0 = "0";
    var string1 = "0";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "Research";
    var int4 = 0;
    if ((int0 != -1 as dbrow)) {
        IF_SETHIDE(true, comp(693, 46));
        IF_SETHIDE(false, comp(693, 48));
        int3 = script14638(int0);
        IF_SETTEXT(dbrow_getfield(int0, 368688, 0), comp(693, 49));
        stack(script14635(int0));
        stack(45416502);
        IF_SETGRAPHIC();
        stack(script14636(int0));
        stack(45416503);
        IF_SETGRAPHIC();
        if ((int3 != -1)) {
            IF_SETHIDE(false, comp(693, 56));
            IF_SETTEXT(`Lvl ${inttostring(int3, 10)}`, comp(693, 53));
        } else {
            IF_SETHIDE(true, comp(693, 56));
            IF_SETTEXT("Lvl 1", comp(693, 53));
            int3 = STAT_BASE(27 as stat);
        };
        IF_SETTEXT(dbrow_getfield(int0, 368736, 0), comp(693, 62));
        if ((int2 > 0)) {
            script14896();
            string4 = script14665(int2);
            switch (script14649(int2)) {
                case 1: {
                    string0 = script14664(int2);
                    string2 = `Report ETA: <col=FFFFFF>${string0}</col>`;
                    string5 = "Terminate";
                    break;
                }
                case 2: {
                    string2 = "<col=FFFFFF>Report available</col>";
                    string5 = "View Report";
                    break;
                }
            };
        } else {
            script14897(int0, int1);
            string0 = script14648(int0, int1, varplayer_9287);
            string1 = script14646(int0, int1, int3, varplayer_9287);
            string2 = `Duration: <col=FFFFFF>${string0}</col>`;
            string3 = `Cost: <col=FFFFFF>${string1}</col>`;
            string4 = script14633(int0, int1, int3);
        };
        CC_DELETEALL(comp(693, 192));
        script14874(comp(693, 192), 0, 0, IF_GETWIDTH(comp(693, 192)), IF_GETHEIGHT(comp(693, 192)), string2, string3, true);
        IF_SETTEXT(string4, comp(693, 199));
        CC_DELETEALL(comp(693, 200));
        int4 = script7593(string4, IF_GETWIDTH(comp(693, 199)), IF_GETFONTMETRICS(comp(693, 199)), 0);
        if ((int4 > IF_GETHEIGHT(comp(693, 198)))) {
            IF_SETSCROLLSIZE(0, int4, comp(693, 198));
            script7791(comp(693, 200), comp(693, 198));
        } else {
            IF_SETSCROLLSIZE(0, 0, comp(693, 198));
        };
        IF_SETSCROLLPOS(0, 0, comp(693, 198));
        script13969(comp(693, 194), comp(693, 195), 28553 as struct, string5);
    } else {
        IF_SETHIDE(false, comp(693, 46));
        IF_SETHIDE(true, comp(693, 48));
    };
    return;
}