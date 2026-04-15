//
function script18021(int0: int, int1: int, int2: int, int3: dbrow, int4: component, int5: int, int6: boolean, int7: int, int8: int, int9: int): [int, int] {
    var int10 = -1;
    var string0 = "";
    var int11 = -1;
    var int12 = script17874(int3, int0);
    if ((CC_FINDBYCATEGORY(int4, 2, int0) == 1)) {
        CC_DELETEALLNESTED();
        if ((CC_GETDYNAMICLAYER() == 1)) {
            CC_SETSIZE(int8, 0, 0, 1);
        };
    };
    if ((CC_FINDBYCATEGORY(int4, 2, int0) == 1)) {
        var [int1, int2] = script17970(int1, int2);
        cc_setparam(4935, int1);
        cc_setparam(8654, int2);
        script17947(int1, int2, 0, 0, 0, 0, 0, 0, 1, 1, script17986(int12, int6, int9));
        CC_GETDYNAMICLAYER();
        int2 = (int2 + 1);
        [int1, int2] = script18025(int1, int2, CC_GETLAYER(), int0, int6, int8, -1);
    };
    return [int1, int2];
}