//
function script19515(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    var string0 = "Withdraw";
    var string1 = script19536();
    while ((int0 < 200)) {
        if ((CC_FIND(comp(1313, 75), int0) == 1)) {
            int1 = INV_GETOBJ(963 as inv, int0);
            if ((int1 == -1 as obj)) {
                int1 = 48447 as obj;
            };
            int2 = INV_GETNUM(963 as inv, int0);
            int3 = CC_GETINVCOUNT();
            if (((int1 != CC_GETINVOBJECT()) || (((int3 == 0) && (int2 > 0)) || ((int2 == 0) && (int3 > 0))))) {
                script19540(string0, string1, int1, int2);
            } else if ((int1 == 48447 as obj)) {
                CC_SETOBJECT_NONUM(48447 as obj, 0);
            } else {
                CC_SETOBJECT(int1, int2);
            };
        };
        int0 = (int0 + 1);
    };
    return;
}