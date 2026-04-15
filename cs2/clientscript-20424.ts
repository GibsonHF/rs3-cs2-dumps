//
function script20424(int0: int): dbrow {
    if ((int0 == 0)) {
        return -1 as dbrow;
    };
    var int1 = enum_getvalue(0, 74, 9774 as cs2enum, int0);
    if ((int1 == -1 as dbrow)) {
        script12478(`Can't match skill_id ${inttostring(int0, 10)} to a dbrow! Something has gone wrong!`);
    };
    return int1;
}