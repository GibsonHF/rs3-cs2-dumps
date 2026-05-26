//
function script16092(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 50;
    if ((CC_FINDBYCATEGORY(31784973, 0, 0) == 1)) {
        if ((int0 == 0)) {
            CC_SETGRAPHIC(script16723(int4));
            script16728(int4, int6);
        } else {
            int7 = CC_GETX();
            int8 = CC_GETY();
            CC_SETHIDE(1);
            script16201(int4, int5, 31784967, int7, int8, int9, 0, 1);
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