//
function script18197(int0: number, int1: number): number {
    var int2 = 0;
    var string0 = "";
    if ((IF_FIND[1](struct_getparam(int0, 6310)) == 1)) {
        CC_SETONOP[1](callback(script13181, dbrow_getfield(int1, 667648, 0), -2147483644, -2147483645));
        if ((int1 != -1 as dbrow)) {
            if ((DB_GETFIELDCOUNT(int1, 667920) > 0)) {
                if ((script15764(int1) != -1)) {
                    string0 = "Reclaim";
                } else {
                    int2 = 1;
                };
            } else if ((DB_GETFIELDCOUNT(int1, 667904) > 0)) {
                string0 = "Rename";
            };
        };
        CC_SETOP[1](2, string0);
    };
    return int2;
}