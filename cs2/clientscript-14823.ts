//
function script14823(): void {
    var int0 = comp(685, 58);
    CC_DELETEALL(int0);
    var string0 = "";
    if ((varbitplayer_46466 == 0)) {
        if ((script14590(2798 as dbrow) == 0)) {
            string0 = "You need to earn the Assistant qualification before you can manage a research team.";
        } else {
            string0 = "You can start managing a research team by interacting with the research notes in the exam centre at the Archaeology campus.";
        };
        script10629(int0, IF_GETNEXTSUBID(int0), IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, string0, 0, 26 as fontmetrics, 1, 1, 0, false);
        return;
    };
    var int1 = 1;
    var int2 = -1 as dbrow;
    string0 = "No Active Research";
    var string1 = "";
    if ((varbitplayer_46466 > 0)) {
        int2 = script14650(int1);
        if ((int2 != -1 as dbrow)) {
            string0 = dbrow_getfield(int2, 368688, 0);
        };
        switch (script14649(int1)) {
            case 1: {
                string1 = `<col=000000>Report ETA: ${script14664(int1)}</col>`;
                break;
            }
            case 2: {
                string1 = "<col=000000>Report available</col>";
                break;
            }
        };
        script10629(int0, IF_GETNEXTSUBID(int0), IF_GETWIDTH(int0), (IF_GETHEIGHT(int0) / 2), 0, 0, string0, 0, 26 as fontmetrics, 1, 1, 0, false);
        script14874(int0, 0, (IF_GETHEIGHT(int0) / 2), IF_GETWIDTH(int0), (IF_GETHEIGHT(int0) / 2), string1, "", false);
        CC_DELETEALL(comp(685, 60));
        script14875(comp(685, 60), comp(-1, 65535), 1, 0, 0, IF_GETWIDTH(comp(685, 60)), IF_GETHEIGHT(comp(685, 60)), 0);
    };
    return;
}