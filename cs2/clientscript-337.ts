//
function script337(int0: int, int1: int): void {
    var int2 = (int1 + (int0 * 25));
    if ((CLIENTCLOCK() > (int2 + 50))) {
        CC_DELETEALL(comp(1216, 1));
        IF_SETONTIMER(callback(), comp(1216, 7));
        return;
    };
    var int3 = 0;
    var int4 = RANDOM(150);
    var int5 = RANDOM(50);
    while ((int3 < int0)) {
        if ((CLIENTCLOCK() == (int1 + (int3 * 25)))) {
            CC_DELETEALL(comp(1216, 1));
            CC_CREATE(comp(1216, 1), 6, IF_GETNEXTSUBID(comp(1216, 1)));
            CC_SETSIZE(121, 114, 0, 0);
            CC_SETMODEL(32150 as model);
            CC_SETMODELANIM(15754 as seq);
            CC_SETMODELANGLE(0, 0, 512, 0, 0, (900 + RANDOM(1000)));
            int4 = RANDOM(150);
            int5 = RANDOM(50);
            if ((RANDOM(2) == 1)) {
                int4 = (int4 * -1);
            };
            CC_SETPOSITION(int4, int5, 1, 0);
        };
        int3 = (int3 + 1);
    };
    return;
}