//[proc,gravestone_shop_model]
function script683(int0: int): void {
    CC_SETNPCHEAD(enum_getvalue(0, 32, 1098 as cs2enum, int0));
    if ((int0 == 0)) {
        script684(0, 63);
        CC_SETMODELANGLE(0, 0, 0, 0, 0, 528);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 1)) {
        script684(-31, 58);
        CC_SETMODELANGLE(0, 0, 0, 0, 0, 400);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 3));
        CC_SETMODELANIM(7375);
        return;
    };
    if ((int0 == 2)) {
        script684(0, 58);
        CC_SETMODELANGLE(0, 0, 0, 0, 0, 528);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 3)) {
        script684(0, 48);
        CC_SETMODELANGLE(0, 0, 52, 0, 0, 650);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 4)) {
        script684(0, 62);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 528);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 5)) {
        script684(-3, 60);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 656);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 512, 3));
        return;
    };
    if ((int0 == 6)) {
        script684(0, 68);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 720);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 7)) {
        script684(0, 61);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 584);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 8)) {
        script684(0, 67);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 840);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 9)) {
        script684(0, 65);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 614);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 0, 0, 256, 2));
        return;
    };
    if ((int0 == 10)) {
        script684(0, 69);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 755);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 35, 0, 256, 2));
        return;
    };
    if ((int0 == 11)) {
        script684(0, 68);
        CC_SETMODELANGLE(0, 0, 35, 0, 0, 671);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 35, 0, 256, 2));
        return;
    };
    if ((int0 == 12)) {
        script684(0, 70);
        CC_SETMODELANGLE(0, 0, 35, 1891, 0, 1277);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 35, 0, 256, 2));
        return;
    };
    if ((int0 == 13)) {
        script684(0, 70);
        CC_SETMODELANGLE(0, 0, 35, 1891, 0, 1277);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 35, 0, 256, 2));
        return;
    };
    if ((int0 == 14)) {
        script684(0, 70);
        CC_SETMODELANGLE(0, 0, 35, 1891, 0, 1277);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 35, 0, 256, 2));
        return;
    };
    if ((int0 == 15)) {
        script684(0, 70);
        CC_SETMODELANGLE(0, 0, 35, 1891, 0, 1277);
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, 35, 0, 256, 2));
        return;
    };
    CC_SETMODELANGLE(0, 0, 0, 0, 0, 2000);
    return;
}