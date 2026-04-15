//
function script17435(int0: int): int {
    var int1 = 0;
    var int2 = script11183(int0);
    if ((int2 == -1 as dbrow)) {
        script12478(`Could not find crack chance for modifier ID ${inttostring(int0, 10)}: setting to 100%`);
        int1 = 100;
    } else {
        int1 = MIN((dbrow_getfield(int2, 659504, 0) * (varbitplayer_22146 + 1)), 100);
    };
    return int1;
}