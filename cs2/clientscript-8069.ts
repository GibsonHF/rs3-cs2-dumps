//
function script8069(int0: number): [number, number] {
    var int1 = script2390(int0);
    var int2 = script2385(int0, varbitclient_42113);
    if (((int2 >= script9929()) || (int2 == -1))) {
        if ((varbitplayer_27169 == 1)) {
            if ((IF_GETHIDE(96797477) == 1)) {
                return script8069(9);
            };
            return [93913091, -1];
        };
        if ((int2 != -1)) {
            if ((IF_GETHIDE(96797362) == 0)) {
                return [37224454, int1];
            };
            return [93782025, -1];
        };
        return [-1, -1];
    };
    if ((((varbitplayer_27169 == 0) && (varbitplayer_38842 == 0)) && (int1 != -1))) {
        int1 = int0;
    };
    return [93782028, int1];
}