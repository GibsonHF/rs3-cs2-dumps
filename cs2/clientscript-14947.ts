//
function script14947(int0: number, int1: number): void {
    if ((script8292(13, 1) == 0)) {
        return;
    };
    var int2 = 103940106;
    var int3 = (2500 * 10);
    var int4 = 0;
    while ((int4 < 50)) {
        if (((CC_FIND(int2, int4) == 1) && (cc_getparam(9501) == int0))) {
            stack(int2);
            stack((int3 + int4));
            script21130();
            if ((CC_FINDBYCATEGORY() == 1)) {
                switch (int1) {
                    case 2: {
                        CC_SETTEXT("Installed");
                        script7872(0, 1, 0, 0);
                        CC_SETONMOUSEREPEAT(callback());
                        script8808();
                        break;
                    }
                    case 1: {
                        CC_SETTEXT("Installing...");
                        script7872(0, 1, 0, 0);
                        break;
                    }
                    case 0: {
                        CC_SETTEXT("Install");
                        script7872(1, 1, 0, 0);
                        break;
                    }
                    default: {
                        return;
                    }
                };
                return;
            };
        };
        int4 = (int4 + 1);
    };
    return;
}