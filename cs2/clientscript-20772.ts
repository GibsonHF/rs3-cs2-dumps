//
function script20772(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = dbrow_getfield(int3, 1515584, 0);
    var int6 = 0;
    if (((CC_FIND(int0, int4) == 1) && (CC_FIND[1](int1, int4) == 1))) {
        unk11040(callback());
        if (((script12592(int3) == 1) && (script7105(int5) == 1))) {
            int6 = script7108(int5);
            if ((int6 > 0)) {
                script10643(18459);
                if ((varbitclient_61228 == int4)) {
                    script7872(1, 1, 1, 1);
                    CC_SETTRANS[1](0);
                } else {
                    script7872(1, 1, 1, 0);
                    CC_SETTRANS[1](0);
                };
                if (((int6 > 1) && (CC_FIND[1](int2, int4) == 1))) {
                    CC_SETTEXT[1](script17372(INT_TO_LONG(int6), 3, 1));
                };
                return;
            };
        };
        script10643(18460);
        if ((varbitclient_61228 == int4)) {
            script7872(1, 1, 1, 1);
            CC_SETTRANS[1](175);
        } else {
            script7872(1, 1, 0, 0);
            CC_SETTRANS[1](175);
        };
    };
    return;
}