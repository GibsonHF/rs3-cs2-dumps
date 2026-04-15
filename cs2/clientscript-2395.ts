//
function script2395(int0: int, int1: component, int2: int, int3: unknown_int): void {
    if ((varbitplayer_27169 == 1)) {
        return;
    };
    if (((int1 == comp(-1, 65535)) || (int3 == -1))) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = script2385(int0, 1);
    var int7 = 0;
    if ((int3 == 37158928)) {
        if ((((int6 == -1) || (IF_GETLAYER(int1) == comp(567, 16))) || (script13863(int0, -1, int1, int2) == 0))) {
            return;
        };
        int7 = -1;
    } else if ((int3 == 37158919)) {
        if (((script6431() == true) && (script2387(1) >= 8))) {
            script426(`A maximum of ${inttostring(8, 10)} icons can be visible at once. Remove an icon before adding another.`, int1, int2, 1);
            return;
        };
        int4 = script8403(comp(567, 7));
        int5 = script8404(comp(567, 7));
        int7 = ((int4 - 0) / 44);
        if ((int5 > (2 + (44 * 2)))) {
            int7 = (int7 + (15 * 2));
        } else if ((int5 > (2 + 44))) {
            int7 = (int7 + 15);
        };
    } else {
        return;
    };
    if ((((PLAYERMEMBER() == false) && (int0 == script2390(7))) && (IF_FIND(comp(1431, 1)) == 1))) {
        int7 = MAX(0, MIN(int7, cc_getparam(6837)));
    };
    script2393(int0, int7);
    script13862();
    varbitclient_49616 = 1;
    return;
}