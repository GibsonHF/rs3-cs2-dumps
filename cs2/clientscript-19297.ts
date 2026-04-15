//
function script19297(): void {
    var int0 = comp(-1, 65535);
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 1;
    var int4 = 0;
    while ((++int4 <= 8)) {
        [int1, int2, int3] = script19217(int4);
        if ((MODULO(((int4 - 1) / 2), 2) == 0)) {
            int0 = comp(1290, 86);
        } else {
            int0 = comp(1290, 87);
        };
        if ((((CC_FINDBYCATEGORY(int0, int4, 0) == 1) && (varplayer_11882 <= SCALE((8 - int4), 8, 100000))) && (unk11011(int4, 3, int0) == 0))) {
            if ((CC_FINDBYCATEGORY(int0, int4, 1) == 1)) {
                CC_SETONTIMER(callback(script15372, CC_GETLAYER(), CC_GETID(), (CLIENTCLOCK() + SCALE(5, 6, 30)), -1));
            };
            if ((CC_FINDBYCATEGORY(int0, int4, 2) == 1)) {
                CC_SETONTIMER(callback(script13583, CC_GETLAYER(), CC_GETID(), (CLIENTCLOCK() + SCALE(5, 6, 30)), -1));
                script14420(int1);
                CC_SETOP(1, "Examine");
                CC_SETONOP(callback(script7774, script17427(int1), CC_GETLAYER(), CC_GETID(), 0));
            };
            script9861(int4, 3, 1, 34, 1, 0, 36, 32, 0, 0, int1, int2, 0, 1);
            CC_SETTRANS(255);
            CC_SETONTIMER(callback(script13583, CC_GETLAYER(), CC_GETID(), (CLIENTCLOCK() + SCALE(5, 6, 30)), -1));
        };
    };
    return;
}