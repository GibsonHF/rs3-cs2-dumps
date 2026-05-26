//
function script337(int0: number, int1: number): void {
    var int2 = (int1 + (int0 * 25));
    if ((CLIENTCLOCK() > (int2 + 50))) {
        CC_DELETEALL(79691777);
        IF_SETONTIMER(callback(), 79691783);
        return;
    };
    var int3 = 0;
    var int4 = RANDOM(150);
    var int5 = RANDOM(50);
    while ((int3 < int0)) {
        if ((CLIENTCLOCK() == (int1 + (int3 * 25)))) {
            CC_DELETEALL(79691777);
            CC_CREATE(79691777, 6, IF_GETNEXTSUBID(79691777));
            CC_SETSIZE(121, 114, 0, 0);
            CC_SETMODEL(32150);
            CC_SETMODELANIM(15754);
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