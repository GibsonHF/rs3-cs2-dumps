//
function script8069(int0: int): [component, int] {
    var int1 = script2390(int0);
    var int2 = script2385(int0, varbitclient_42113);
    if (((int2 >= script9929()) || (int2 == -1))) {
        if ((varbitplayer_27169 == 1)) {
            if ((IF_GETHIDE(comp(1477, 805)) == true)) {
                return script8069(9);
            };
            return [comp(1433, 3), -1];
        };
        if ((int2 != -1)) {
            if ((IF_GETHIDE(comp(1477, 690)) == false)) {
                return [comp(568, 6), int1];
            };
            return [comp(1431, 9), -1];
        };
        return [comp(-1, 65535), -1];
    };
    if ((((varbitplayer_27169 == 0) && (varbitplayer_38842 == 0)) && (int1 != -1))) {
        int1 = int0;
    };
    return [comp(1431, 12), int1];
}