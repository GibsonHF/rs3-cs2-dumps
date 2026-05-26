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
    IF_SETHIDE(0, 94568457);
    IF_SETHIDE(0, 94568470);
    IF_SETHIDE(1, 94568450);
    IF_SETHIDE(1, 94568449);
    IF_SETHIDE(1, 94568451);
    IF_SETHIDE(1, 94568471);
    CC_DELETEALL(94568467);
    CC_DELETEALL(94568468);
    var string0 = dbrow_getfield(int3, 1347584, 0);
    var int4 = dbrow_getfield(int3, 1347632, 0);
    var int5 = script20144(int3);
    IF_SETTEXT(`Tier ${inttostring((varbitplayer_58407 + 1), 10)} Relics`, 94568460);
    if (((int5 == 0) && (script20142(varbitplayer_58407) == 1))) {
        IF_SETENABLED(1, 94568482);
    } else {
        IF_SETENABLED(0, 94568482);
    };
    var int6 = 4;
    var int7 = 0;
    var int8 = IF_GETWIDTH(94568466);
    if ((IF_FIND(94568467) == 1)) {
        [int7, int6] = script20266(int3, int7, int6, int8);
        [int7, int6] = script20265(int3, int7, int6, int8, int5);
        [int7, int6] = script20267(int3, int7, int6, int8);
    };
    script19620(94568469, 94568466, int6, -1, -1, 0, 8, 4);
    return;
}