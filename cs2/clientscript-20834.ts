//
function script20834(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = dbrow_getfield(int3, 1515584, 0);
    var int6 = OC_CERT(int5);
    var int7 = INV_TOTAL(93 as inv, int5);
    if ((int6 != int5)) {
        int7 = (int7 + INV_TOTAL(93 as inv, int6));
    };
    var int8 = INV_TOTAL(1004 as inv, int5);
    var string0 = "Withdraw";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "Examine";
    if ((int8 > 1)) {
        string0 = "Withdraw-1";
        string1 = "Withdraw-5";
        string3 = "Withdraw-All";
        string4 = "Withdraw-X";
        if ((int8 > 5)) {
            string2 = "Withdraw-10";
        };
    };
    if (((CC_FIND(int0, int4) == 1) && (CC_FIND[1](int1, int4) == 1))) {
        script10641(string0, string1, string2, string3, string4, "", "", "", "", string5);
        if ((int7 > 0)) {
            script10643(18459);
            script7872(1, 1, 1, 1);
            CC_SETTRANS[1](0);
        } else {
            script10643(18459);
            script7872(1, 1, 0, 0);
            CC_SETTRANS[1](0);
        };
        if (((int8 > 1) && (CC_FIND[1](int2, int4) == 1))) {
            CC_SETTEXT[1](script17372(INT_TO_LONG(int8), 3, 1));
        };
    };
    return;
}