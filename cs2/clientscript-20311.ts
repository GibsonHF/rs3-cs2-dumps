//
function script20311(int0: component, int1: component, int2: component, int3: int, int4: int): void {
    var int5 = (int3 - 200);
    script20170(int4, int5);
    var int6 = 30208 as graphic;
    var string0 = "Collapse";
    if ((CC_FINDBYCATEGORY(int0, int3, 0) == 1)) {
        if ((script20171(int4, int5) == 1)) {
            CC_SETSIZE(0, 40, 1, 0);
            int6 = 30205 as graphic;
            string0 = "Expand";
        } else {
            CC_SETSIZE(0, cc_getparam(9334), 1, 0);
        };
    };
    if ((CC_FINDBYCATEGORY(int0, int3, 6) == 1)) {
        CC_SETGRAPHIC(int6);
    };
    if ((CC_FINDBYCATEGORY(int0, int3, 2) == 1)) {
        CC_SETOP(1, string0);
    };
    script20309(int0, int1, int2);
    return;
}