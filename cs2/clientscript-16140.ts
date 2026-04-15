//
function script16140(int0: int): unknown_int {
    SHOP_GETINDEXFORCATEGORYID(int0);
    var int1 = stack();
    stack(int1);
    var int2 = SHOP_GETPRODUCTCOUNT();
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var int7 = 0;
    var string6 = "";
    while (((int4 < int2) && (int3 == 0))) {
        stack(SHOP_GETPRODUCTDETAILS(int1, int4));
        [string0, string1, string2, string3, string4, string5, int7, string6] = stack();
        if ((strcmp(string1, "") != 0)) {
            int5 = script16590(PLATFORMTYPE(), string1);
            if ((int5 != -1 as dbrow)) {
                if ((script15747(SHOP_ISPRODUCTAVAILABLE(int1, int4), int5) == 1)) {
                    int3 = 1;
                };
                int5 = -1 as dbrow;
            };
        };
        int4 = (int4 + 1);
    };
    if ((int3 == 1)) {
        return 0;
    };
    return 1;
}