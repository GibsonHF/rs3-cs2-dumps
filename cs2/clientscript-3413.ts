//
function script3413(): void {
    var int0 = -1;
    var int1 = ENUM_GETOUTPUTCOUNT(3077 as cs2enum);
    while ((++int0 < int1)) {
        script4596(enum_getvalue(0, 26, 3077 as cs2enum, MIN((int0 + 1), int1)));
        script8899(enum_getvalue(0, 26, 3077 as cs2enum, int0));
        script13064(enum_getvalue(0, 26, 3077 as cs2enum, int0));
    };
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_35835, 1), comp(1865, 15));
    script13632();
    return;
}