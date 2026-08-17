//
function script20750(int0: number, int1: number, int2: number): void {
    if ((int1 == comp(1512, 17))) {  // house_furniture_catalogue:items_count
        if (((varbitclient_61875 == 1) || (varbitclient_61226 == 62))) {
            return;
        };
    };
    var int4 = dbrow_findnext();
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    while ((int4 != -1)) {
        int5 = dbrow_getfield(int4, 1515520, 0);
        if (((CC_FIND(int0, int5) == 1) && (CC_FIND[1](int1, int5) == 1))) {
            int6 = INV_TOTAL(1004 as inv, dbrow_getfield(int4, 1515584, 0));
            if ((int6 > 0)) {
                script10643(18459);
                if ((varbitclient_61228 == int5)) {
                    script7872(1, 1, 1, 1);
                    CC_SETTRANS[1](0);
                } else {
                    script7872(1, 1, 1, 0);
                    CC_SETTRANS[1](0);
                };
                if (((int6 > 1) && (CC_FIND[1](int2, int5) == 1))) {
                    CC_SETTEXT[1](script17372(INT_TO_LONG(int6), 3, 1));
                };
            } else {
                script10643(18460);
                if ((varbitclient_61228 == int5)) {
                    script7872(1, 1, 1, 1);
                    CC_SETTRANS[1](175);
                } else {
                    script7872(1, 1, 0, 0);
                    CC_SETTRANS[1](175);
                };
            };
        };
        if ((CC_FIND(int3, int5) == 1)) {
            int7 = dbrow_getfield(int4, 1515856, 0);
            int8 = DB_GETFIELDCOUNT(int7, 1572864);
            if ((int8 > 0)) {
                CC_SETTEXT(`<sprite=35194>${script17372(INT_TO_LONG(int8), 3, 1)}`);
            };
        };
        int4 = dbrow_findnext();
    };
    return;
}