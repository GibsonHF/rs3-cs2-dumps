//
function script20263(): void {
    var int0 = script20117(varplayer_12314);
    if ((script20132(int0) == 0)) {
        script20254();
        return;
    };
    var int1 = dbrow_getfield(int0, 1335424, 0);
    var int2 = dbrow_getfield(int1, 1339392, varbitplayer_58407);
    if ((int2 == -1 as dbrow)) {
        script20254();
        return;
    };
    var int3 = dbrow_getfield(int2, 1343504, varbitplayer_58408);
    if ((int3 == -1 as dbrow)) {
        script20254();
        return;
    };
    script20264(int2, int3);
    script20268(int1);
    IF_SETHIDE(false, comp(1443, 9));
    IF_SETHIDE(false, comp(1443, 22));
    IF_SETHIDE(true, comp(1443, 2));
    IF_SETHIDE(true, comp(1443, 1));
    IF_SETHIDE(true, comp(1443, 3));
    IF_SETHIDE(true, comp(1443, 23));
    CC_DELETEALL(comp(1443, 19));
    CC_DELETEALL(comp(1443, 20));
    var string0 = dbrow_getfield(int3, 1347584, 0);
    var int4 = dbrow_getfield(int3, 1347632, 0);
    var int5 = script20144(int3);
    IF_SETTEXT(`Tier ${inttostring((varbitplayer_58407 + 1), 10)} Relics`, comp(1443, 12));
    if (((int5 == false) && (script20142(varbitplayer_58407) == true))) {
        IF_SETENABLED(true, comp(1443, 34));
    } else {
        IF_SETENABLED(false, comp(1443, 34));
    };
    var int6 = 4;
    var int7 = 0;
    var int8 = IF_GETWIDTH(comp(1443, 18));
    if ((IF_FIND(comp(1443, 19)) == 1)) {
        [int7, int6] = script20266(int3, int7, int6, int8);
        [int7, int6] = script20265(int3, int7, int6, int8, int5);
        [int7, int6] = script20267(int3, int7, int6, int8);
    };
    script19620(comp(1443, 21), comp(1443, 18), int6, comp(-1, 65535), -1, 0, 8, 4);
    return;
}