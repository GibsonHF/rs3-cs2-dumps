//
function script9292(): void {
    script16571(varbitclient_41275);
    IF_SETHIDE(script12585(script19316()), 56164367);
    if (((IF_GETHIDE(18087963) == 1) && (IF_FIND(struct_getparam(script10405(18), 3503)) == 1))) {
        switch (varbitclient_41275) {
            case 0: {
                CC_SETSIZE(300, 100, 0, 0);
                IF_SETPARAM_INT(6839, varclient_2835, 8978487);
                script6060(255);
                varclient_6798 = (CLIENTCLOCK() + 250);
                script8792();
                break;
            }
            case 1: {
                CC_SETSIZE(300, 100, 0, 0);
                varclient_6798 = 0;
                script6060(0);
                break;
            }
            case 2: {
                CC_SETSIZE(0, 0, 0, 0);
                script6060(255);
                break;
            }
        };
    };
    return;
}