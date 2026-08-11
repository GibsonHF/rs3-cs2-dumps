//
function script20750(int0: number, int1: number, int2: number): void {
    if (((varbitclient_61226 == 62) && (int1 == comp(1512, 16)))) {  // house_furniture_catalogue:items_obj
        return;
    };
    var int3 = dbrow_findnext();
    var int4 = 0;
    var int5 = 0;
    while ((int3 != -1)) {
        int4 = dbrow_getfield(int3, 1515520, 0);
        if (((CC_FIND(int0, int4) == 1) && (CC_FIND[1](int1, int4) == 1))) {
            int5 = INV_TOTAL(1004 as inv, dbrow_getfield(int3, 1515584, 0));
            if ((int5 > 0)) {
                script10643(18459);
                if ((varbitclient_61228 == int4)) {
                    script7872(1, 1, 1, 1);
                    CC_SETTRANS[1](0);
                } else {
                    script7872(1, 1, 1, 0);
                    CC_SETTRANS[1](0);
                };
                if (((int5 > 1) && (CC_FIND[1](int2, int4) == 1))) {
                    CC_SETTEXT[1](script17372(INT_TO_LONG(int5), 3, 1));
                };
            } else {
                script10643(18460);
                if ((varbitclient_61228 == int4)) {
                    script7872(1, 1, 1, 1);
                    CC_SETTRANS[1](175);
                } else {
                    script7872(1, 1, 0, 0);
                    CC_SETTRANS[1](175);
                };
            };
        };
        int3 = dbrow_findnext();
    };
    return;
}