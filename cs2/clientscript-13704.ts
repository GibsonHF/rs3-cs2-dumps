//
function script13704(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        switch (varbitplayer_38399) {
            case 1: {
                CC_SETCOLOUR(16645888);
                break;
            }
            case 2: {
                CC_SETCOLOUR(16754432);
                break;
            }
            case 3: {
                CC_SETCOLOUR(16711680);
                break;
            }
        };
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5837, 1);
        cc_setparam(5940, 150);
        cc_setparam(5938, 30);
        cc_setparam(5939, 100);
    };
    return;
}