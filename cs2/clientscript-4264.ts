//
function script4264(int0: component, int1: int, int2: unknown_int): void {
    var int3 = 233;
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    if ((IF_FIND(int0) == 1)) {
        [int3, int4] = script4265(int0, int1);
        if ((CC_FINDBYCATEGORY(int0, int3, int4) == 1)) {
            int5 = IF_GETNEXTCATEGORYSUBID(int3, int0);
            CC_CREATECHILD(5, int3, int5);
            if ((int2 > 1)) {
                int6 = IF_GETNEXTCATEGORYSUBID(int3, int0);
                CC_CREATECHILD(5, int3, int6);
                if ((int2 > 2)) {
                    int7 = IF_GETNEXTCATEGORYSUBID(int3, int0);
                    CC_CREATECHILD(5, int3, int7);
                    if ((int2 > 3)) {
                        int8 = IF_GETNEXTCATEGORYSUBID(int3, int0);
                        CC_CREATECHILD(5, int3, int8);
                    };
                };
            };
        };
        if ((CC_FINDBYCATEGORY(int0, int3, int4) == 1)) {
            CC_SETPARAM_INT(8959, int5);
            CC_SETPARAM_INT(8960, int6);
            CC_SETPARAM_INT(8961, int7);
            CC_SETPARAM_INT(8962, int8);
        };
    };
    return;
}