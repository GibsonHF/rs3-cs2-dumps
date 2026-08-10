//
function script20930(): void {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1)) {
        script12478(`Attempted lookup without an active league: ${inttostring(varplayer_12314, 10)}`);
        return;
    };
    var int1 = dbrow_getfield(int0, 1335648, 0);
    var int2 = 0;
    var int3 = 0;
    stack(0);
    script20928();
    var int4 = [];
    var int5 = 0;
    while ((int2 < int4)) {
        int5 = enum_getvalue(0, 0, int1, int2);
        if ((varbitplayer_58389 < int5)) {
            if ((int2 == 0)) {
                varbitplayer_61501 = 15;
            } else {
                varbitplayer_61501 = (int2 - 1);
            };
            varbitplayer_61500 = int5;
            return;
        };
        int2 = (int2 + 1);
    };
    varbitplayer_61501 = (int2 - 1);
    varbitplayer_61500 = 2047;
    return;
}