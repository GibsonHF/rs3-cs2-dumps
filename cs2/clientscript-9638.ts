//
function script9638(int0: component, int1: component, int2: component, int3: int): void {
    var int4 = int3;
    var int5 = 0;
    var int6 = 0;
    while (((int5 == 0) && (CC_FIND(int0, int4) == 1))) {
        if ((cc_getparam(4032) != -1)) {
            if ((cc_getparam(4033) != 1)) {
                if ((CC_GETGRAPHIC() == 20326 as graphic)) {
                    CC_SETGRAPHIC(20268 as graphic);
                } else {
                    int5 = 1;
                };
            };
        } else {
            int6 = script9635(cc_getparam(3430));
            if ((int6 == 1)) {
                script9628(int0, int4, 0);
            } else {
                int5 = 1;
            };
        };
        int4 = (int4 + 5);
    };
    if ((int5 == 1)) {
        varclient_3928 = -1;
        varclient_3929 = -1;
        varclient_3930 = -1;
        varclient_3931 = -1;
        varclient_3932 = -1;
        varclient_8300 = -1;
        switch (varbitplayer_14108) {
            case 1: {
                script1839(1, int0, int1, int2);
                break;
            }
            default: {
                script1839(0, int0, int1, int2);
                break;
            }
        };
    };
    return;
}