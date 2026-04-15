//
function script9142(): string {
    var int0 = (((((varbitplayer_5479 + varbitplayer_5480) + varbitplayer_5481) + varbitplayer_5482) + varbitplayer_5483) + varbitplayer_5484);
    var int1 = 3;
    if ((varbitplayer_11683 == 270)) {
        int1 = (int1 + 2);
    };
    if ((varbitplayer_9391 == 175)) {
        int1 = (int1 + 1);
    };
    var string0 = "";
    if ((varclient_6416 == -1 as coordgrid)) {
        string0 = `You have completed <col=ffffff>${inttostring(int0, 10)} of ${inttostring(int1, 10)}</col> performances this week.<br>The circus moves to a new location every week.`;
    } else {
        string0 = `You have completed <col=ffffff>${inttostring(int0, 10)} of ${inttostring(int1, 10)}</col> performances this week.<br>The circus moves to a new location every week.<br>The ticket vendor is currently located near <col=ffffff>${enum_getvalue(22, 36, 1781 as cs2enum, varclient_6416)}</col>.`;
    };
    return string0;
}