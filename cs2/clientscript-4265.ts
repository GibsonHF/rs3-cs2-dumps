//
function script4265(int0: component, int1: int): [int, int] {
    var int2 = 233;
    var int3 = 0;
    if ((IF_FIND(int0) == 1)) {
        [int2, int3] = script3874(int1);
        if (((int2 != -1) && (CC_FINDBYCATEGORY(int0, int2, int3) == 1))) {
            CC_DELETEALLNESTED();
            CC_DELETE();
        };
        if ((IF_FIND(int0) == 1)) {
            int2 = 233;
            int3 = IF_GETNEXTCATEGORYSUBID(int2, int0);
            script3858(int1, int2, int3);
            script15937(int2, int3, 0, 0, 0, 0, 0, 0, 1, 1);
            CC_SETHIDE(true);
        };
    };
    return [int2, int3];
}