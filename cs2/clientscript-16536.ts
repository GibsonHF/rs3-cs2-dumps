//
function script16536(): void {
    if ((script16513() == 0)) {
        return;
    };
    var int0 = 63569974;
    var int1 = 63569975;
    var int2 = 63569976;
    var int3 = 63569983;
    var int4 = 63569994;
    var int5 = 63570020;
    IF_SETHIDE(0, 63569952);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    IF_SETTEXT("Egg Hunt<br>Bonus", 63569984);
    var int6 = script16519(varbitplayer_51240);
    var string0 = dbrow_getfield(int6, 725008, 0);
    IF_SETTEXT(`Next ${inttostring(6, 10)} eggs:</col><br>${string0}`, 63569985);
    script16537(int3, int6);
    IF_SETTEXT("Bonus Prize", 63570021);
    IF_SETTEXT("1x Mystery Egg", 63570022);
    script16538(int5, 58755, 1);
    var int7 = -1;
    var int8 = 0;
    var string1 = "";
    if ((MODULO(varplayer_10425, 2) == 0)) {
        IF_SETHIDE(0, int1);
        IF_SETPOSITION(40, 0, 0, 1, int0);
        IF_SETPOSITION(0, 0, 1, 1, int1);
        IF_SETPOSITION(40, 0, 2, 1, int2);
        [int7, int8] = script16515();
        IF_SETTEXT("Reward Item", 63569995);
        if ((item_getparam(int7, 2531) == 2)) {
            string1 = `Cosmetic Override:</col><br>${OC_NAME(int7)}`;
        } else {
            string1 = `${inttostring(int8, 10)} x ${OC_NAME(int7)}`;
        };
        IF_SETTEXT(string1, 63569996);
        script16538(int4, int7, int8);
    } else {
        IF_SETHIDE(1, int1);
        IF_SETPOSITION(120, 0, 0, 1, int0);
        IF_SETPOSITION(120, 0, 2, 1, int2);
    };
    return;
}