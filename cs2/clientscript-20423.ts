//
function script20423(int0: int): stat {
    if ((int0 == 0)) {
        return -1 as stat;
    };
    if ((int0 > ENUM_GETOUTPUTCOUNT(681 as cs2enum))) {
        script12478("$skill_id incorrect when trying to obtain a stat");
        return -1 as stat;
    };
    return enum_getvalue(0, 17, 681 as cs2enum, int0);
}