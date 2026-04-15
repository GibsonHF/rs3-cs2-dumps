//
function script16536(): void {
    if ((script16513() == 0)) {
        return;
    };
    var int0 = comp(970, 54);
    var int1 = comp(970, 55);
    var int2 = comp(970, 56);
    var int3 = comp(970, 63);
    var int4 = comp(970, 74);
    var int5 = comp(970, 100);
    IF_SETHIDE(false, comp(970, 32));
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    IF_SETTEXT("Egg Hunt<br>Bonus", comp(970, 64));
    var int6 = script16519(varbitplayer_51240);
    var string0 = dbrow_getfield(int6, 725008, 0);
    IF_SETTEXT(`Next ${inttostring(6, 10)} eggs:</col><br>${string0}`, comp(970, 65));
    script16537(int3, int6);
    IF_SETTEXT("Bonus Prize", comp(970, 101));
    IF_SETTEXT("1x Mystery Egg", comp(970, 102));
    script16538(int5, 58755 as obj, 1);
    var int7 = -1 as obj;
    var int8 = 0;
    var string1 = "";
    if ((MODULO(varplayer_10425, 2) == 0)) {
        IF_SETHIDE(false, int1);
        IF_SETPOSITION(40, 0, 0, 1, int0);
        IF_SETPOSITION(0, 0, 1, 1, int1);
        IF_SETPOSITION(40, 0, 2, 1, int2);
        [int7, int8] = script16515();
        IF_SETTEXT("Reward Item", comp(970, 75));
        if ((item_getparam(int7, 2531) == 2)) {
            string1 = `Cosmetic Override:</col><br>${OC_NAME(int7)}`;
        } else {
            string1 = `${inttostring(int8, 10)} x ${OC_NAME(int7)}`;
        };
        IF_SETTEXT(string1, comp(970, 76));
        script16538(int4, int7, int8);
    } else {
        IF_SETHIDE(true, int1);
        IF_SETPOSITION(120, 0, 0, 1, int0);
        IF_SETPOSITION(120, 0, 2, 1, int2);
    };
    return;
}