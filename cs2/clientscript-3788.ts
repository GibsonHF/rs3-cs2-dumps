//
function script3788(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    var int6 = 0;
    if ((((int4 != -1) && (IF_FIND(int4) == 1)) || (CC_FIND(int0, 1) == 1))) {
        if ((script15721() == 2)) {
            int5 = (IF_GETHEIGHT(int0) - CC_GETHEIGHT());
        } else {
            int5 = (((IF_GETHEIGHT(int0) - 32) - CC_GETHEIGHT()) - 10);
        };
        if ((int5 <= 0)) {
            return;
        };
        int6 = (IF_GETSCROLLHEIGHT(int1) - IF_GETHEIGHT(int1));
        var int2 = ((int2 * int6) / int5);
        script3799(int0, int1, int2, int3, int4);
    };
    return;
}