//
function script13899(int0: component, int1: unknown_int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var string0 = "Regenerate";
    var string1 = "Cure Poison";
    if (((varbitplayer_27168 == 1) || (((varbitplayer_3626 == 1) && (script14608(2903 as dbrow) == 0)) && (script16800() == 0)))) {
        string0 = string1;
        string1 = "";
    };
    IF_SETOP(1, string0, int0);
    IF_SETOP(2, string1, int0);
    if ((int1 != -1)) {
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
    };
    return;
}