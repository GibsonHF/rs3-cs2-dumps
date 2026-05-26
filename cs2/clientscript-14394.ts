//
function script14394(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = -1 as obj;
    var int6 = 0;
    if (((CC_FIND(int1, int2) == 1) && (CC_FIND[1](int3, int4) == 1))) {
        int5 = CC_GETINVOBJECT();
        int6 = CC_GETINVCOUNT();
        CC_SETOBJECT(CC_GETINVOBJECT[1](), CC_GETINVCOUNT[1]());
        script14395(int0, CC_GETINVOBJECT[1]());
        if ((CC_FIND(int3, int4) == 1)) {
            CC_SETOBJECT(int5, int6);
            script14395(int0, int5);
        };
    };
    return;
}