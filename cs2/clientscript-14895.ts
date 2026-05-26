//
function script14895(int0: number, int1: number): void {
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
        IF_SETHIDE(1, 45416494);
        IF_SETHIDE(0, 45416496);
        int3 = script14638(int0);
        IF_SETTEXT(dbrow_getfield(int0, 368688, 0), 45416497);
        stack(script14635(int0));
        stack(45416502);
        IF_SETGRAPHIC();
        stack(script14636(int0));
        stack(45416503);
        IF_SETGRAPHIC();
        if ((int3 != -1)) {
            IF_SETHIDE(0, 45416504);
            IF_SETTEXT(`Lvl ${inttostring(int3, 10)}`, 45416501);
        } else {
            IF_SETHIDE(1, 45416504);
            IF_SETTEXT("Lvl 1", 45416501);
            int3 = STAT_BASE(27);
        };
        IF_SETTEXT(dbrow_getfield(int0, 368736, 0), 45416510);
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
        CC_DELETEALL(45416640);
        script14874(45416640, 0, 0, IF_GETWIDTH(45416640), IF_GETHEIGHT(45416640), string2, string3, 1);
        IF_SETTEXT(string4, 45416647);
        CC_DELETEALL(45416648);
        int4 = script7593(string4, IF_GETWIDTH(45416647), IF_GETFONTMETRICS(45416647), 0);
        if ((int4 > IF_GETHEIGHT(45416646))) {
            IF_SETSCROLLSIZE(0, int4, 45416646);
            script7791(45416648, 45416646);
        } else {
            IF_SETSCROLLSIZE(0, 0, 45416646);
        };
        IF_SETSCROLLPOS(0, 0, 45416646);
        script13969(45416642, 45416643, 28553, string5);
    } else {
        IF_SETHIDE(0, 45416494);
        IF_SETHIDE(1, 45416496);
    };
    return;
}