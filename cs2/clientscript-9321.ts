//
function script9321(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    var string0 = script13591();
    var string1 = script13685();
    while ((int0 < 1820)) {
        if ((CC_FIND(comp(517, 201), int0) == 1)) {
            int1 = INV_GETOBJ(95 as inv, int0);
            if ((int1 == -1 as obj)) {
                int1 = 48447 as obj;
            };
            int2 = INV_GETNUM(95 as inv, int0);
            int3 = CC_GETINVCOUNT();
            if (((int1 != CC_GETINVOBJECT()) || (((int3 == 0) && (int2 > 0)) || ((int2 == 0) && (int3 > 0))))) {
                script13798(string0, string1, int1, int2);
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