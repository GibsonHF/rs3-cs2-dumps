//
function script3519(int0: dbrow, int1: component, int2: int): void {
    var int3 = -1;
    var int4 = -1;
    var int5 = -1 as obj;
    var string0 = "";
    if ((CC_FIND(int1, int2) == 1)) {
        int3 = CC_GETINVCOUNT();
        int4 = script14965(int0);
        if ((int0 == 2274 as dbrow)) {
            int4 = (int4 * 10);
        };
        if ((int3 != int4)) {
            CC_SETOBJECT(dbrow_getfield(int0, 270400, 0), int4);
        };
        int5 = dbrow_getfield(int0, 270400, 0);
        if ((STRING_LENGTH(dbrow_getfield(int0, 270416, 0)) != 0)) {
            string0 = dbrow_getfield(int0, 270416, 0);
        } else if ((int5 != -1 as obj)) {
            string0 = OC_NAME(int5);
        };
        script3537(string0);
    };
    return;
}