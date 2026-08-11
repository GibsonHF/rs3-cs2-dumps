//
function script12730(int0: number, int1: number): void {
    if ((script11747(34277) != 1)) {
        return;
    };
    if (((IF_GETHIDE(comp(1253, 265) /*wheel_of_fortune:reward_layer*/) == false) || (IF_GETHIDE(comp(1786, 28) /*trh104_overlay:confirm*/) == false))) {
        return;
    };
    if (((IF_FIND(int1) == 1) && (cc_getparam(5946) < CLIENTCLOCK()))) {
        cc_setparam(5946, (CLIENTCLOCK() + 25));
        switch (int0) {
            case 2: {
                IF_TRIGGEROP(comp(1253, 556), -1, 1);  // wheel_of_fortune:fake_op
                break;
            }
            case 6: {
                IF_TRIGGEROP(comp(1253, 556), -1, 2);  // wheel_of_fortune:fake_op
                break;
            }
        };
    };
    return;
}