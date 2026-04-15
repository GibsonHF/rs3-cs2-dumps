//
function script18106(int0: dbrow, int1: int, int2: stat, int3: int): string {
    var string0 = "";
    if ((int1 > 0)) {
        if ((int2 == -1 as stat)) {
            string0 = `You are earning <col=2EF8FF>+${TOSTRING_LOCALISED(int1, 1)}%</col> base XP in all ${enum_getvalue(0, 36, 17022 as cs2enum, int3)} skills.`;
        } else {
            string0 = `You are earning <col=2EF8FF>+${TOSTRING_LOCALISED(int1, 1)}%</col> base XP in all ${enum_getvalue(0, 36, 17022 as cs2enum, int3)} skills (excluding ${enum_getvalue(17, 36, 680 as cs2enum, int2)}).`;
        };
    } else {
        string0 = "You do not currently have this buff.";
    };
    var int4 = 0;
    var int5 = 0;
    [int4, int5] = script18103(int0);
    var int6 = (int4 + int5);
    if ((script17865(script17853()) == 1)) {
        if ((int6 > 0)) {
            string0 = strconcat(string0, `<br><br>You can earn <col=2EF8FF>+${TOSTRING_LOCALISED(int6, 1)}%</col> more from the pass.`);
        };
    } else if ((int4 > 0)) {
        if ((int5 > 0)) {
            string0 = strconcat(string0, `<br><br>You can earn <col=2EF8FF>+${TOSTRING_LOCALISED(int4, 1)}%</col> more from the pass (<col=2EF8FF>+${TOSTRING_LOCALISED(int6, 1)}%</col> with the Premier Hero Pass).`);
        } else {
            string0 = strconcat(string0, `<br><br>You can earn <col=2EF8FF>+${TOSTRING_LOCALISED(int4, 1)}%</col> more from the pass.`);
        };
    } else if ((int5 > 0)) {
        string0 = strconcat(string0, `<br><br>You can earn <col=2EF8FF>+${TOSTRING_LOCALISED(int5, 1)}%</col> more from the pass with the Premier Hero Pass.`);
    };
    string0 = strconcat(string0, "<br><br>");
    string0 = strconcat(string0, "Expires at the end of this pass.");
    return string0;
}