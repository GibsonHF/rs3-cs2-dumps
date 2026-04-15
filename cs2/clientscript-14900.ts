//
function script14900(int0: int): void {
    var int1 = comp(693, 25);
    var int2 = comp(693, 26);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int3 = script14650(int0);
    var string0 = "0";
    var string1 = "No Active Research";
    var string2 = "";
    var int4 = false;
    var string3 = "";
    var string4 = "";
    if ((int3 != -1 as dbrow)) {
        string1 = dbrow_getfield(int3, 368688, 0);
        if ((int0 > 0)) {
            switch (script14649(int0)) {
                case 1: {
                    string0 = script14664(int0);
                    string2 = `Report ETA: <col=FFFFFF>${string0}</col>`;
                    string3 = "Select";
                    string4 = "Terminate";
                    break;
                }
                case 2: {
                    string2 = "<col=FFFFFF>Report available</col>";
                    string3 = "Select";
                    string4 = "View Report";
                    break;
                }
            };
        };
    } else {
        string1 = "No Active Research";
        int4 = true;
    };
    script13998(int1, int2, 28556 as struct, 0, 0, IF_GETWIDTH(int1), IF_GETHEIGHT(int1), 0, int4, "", script9670(varclient_6758, -2));
    script152(int1, (IF_GETWIDTH(int1) - 20), (IF_GETHEIGHT(int1) - 20), 10, 10, 26 as fontmetrics, string1, 16777215);
    CC_SETTEXTALIGN(1, 0, 0);
    script14874(int1, 0, 30, IF_GETWIDTH(int1), 30, string2, "", true);
    if ((CC_FIND(int2, 0) == 1)) {
        CC_SETOP(1, string3);
        CC_SETOP(2, string4);
        CC_SETOPCURSOR(1, 46);
        CC_SETONOP(callback(script14887, -2147483644, int0));
    };
    return;
}