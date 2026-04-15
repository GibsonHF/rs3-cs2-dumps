//
function script16092(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int, int5: unknown_int, int6: int): void {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 50;
    if ((CC_FINDBYCATEGORY(comp(485, 13), 0, 0) == 1)) {
        if ((int0 == 0)) {
            CC_SETGRAPHIC(script16723(int4));
            script16728(int4, int6);
        } else {
            int7 = CC_GETX();
            int8 = CC_GETY();
            CC_SETHIDE(true);
            script16201(int4, int5, comp(485, 7), int7, int8, int9, 0, 1);
        };
    };
    if ((int0 == 1)) {
        if ((MODULO(varbitplayer_51593, script16725()) == 0)) {
            int10 = 0;
        };
        IF_SETONTIMER(callback(script16013, int10, int4, int1, int3, int2), 31784973);
    };
    return;
}