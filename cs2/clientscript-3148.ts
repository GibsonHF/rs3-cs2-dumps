//
function script3148(int0: int, string0: string): string {
    SHOP_GETINDEXFORCATEGORYID(int0);
    var int1 = stack();
    stack(int1);
    var int2 = SHOP_GETPRODUCTCOUNT();
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int3 = 0;
    var string7 = "";
    var int4 = 0;
    var int5 = 0;
    while ((int5 < int2)) {
        stack(SHOP_GETPRODUCTDETAILS(int1, int5));
        [string1, string2, string3, string4, string5, string6, int3, string7] = stack();
        if ((strcmp(string1, string0) == 0)) {
            int4 = 1;
            int5 = int2;
        } else {
            int5 = (int5 + 1);
        };
    };
    if ((int4 == 1)) {
        return string4;
    };
    return "";
}