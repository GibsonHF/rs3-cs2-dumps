//
function script11553(): string {
    if ((script11552() == 1)) {
        return "You have killed all of the champions you have access to this week.";
    };
    var string0 = "You can still kill the following champions:<br>";
    var int0 = 0;
    var int1 = -1;
    while ((int0 < 16)) {
        int1 = enum_getvalue(0, 0, 10046 as cs2enum, int0);
        if ((((int1 > -1) && (TESTBIT(varplayer_5441, int1) == 1)) && (TESTBIT(varplayer_5442, int1) == 0))) {
            string0 = `${string0}<br><col=ffffff> - ${enum_getvalue(0, 36, 10045 as cs2enum, int0)}</col>`;
        };
        int0 = (int0 + 1);
    };
    return string0;
}