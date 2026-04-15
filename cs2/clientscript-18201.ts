//
function script18201(int0: struct, int1: dbrow): void {
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var string0 = script18200(int1);
    var int2 = -1 as obj;
    if ((DB_GETFIELDCOUNT(int1, 667920) > 0)) {
        int2 = script15764(int1);
    };
    if ((IF_FIND(struct_getparam(int0, 6311)) == 1)) {
        CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
        CC_SETTEXTALIGN(0, 1, 0);
        if ((IF_FIND[1](IF_GETLAYER(CC_GETLAYER())) == 1)) {
            if ((int2 != -1 as obj)) {
                CC_SETONMOUSEREPEAT[1](callback(script13180, -2147483645, -2147483643, int1, 1));
            } else {
                CC_SETONMOUSEREPEAT[1](callback(script13180, -2147483645, -2147483643, int1, 0));
            };
        };
    };
    return;
}