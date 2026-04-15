//
function script7419(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component): void {
    var int8 = 0;
    if ((IF_GETNEXTSUBID(int2) != 0)) {
        CC_DELETEALL(int1);
        CC_DELETEALL(int5);
        while ((int8 < 300)) {
            if ((CC_FIND(int2, int8) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int6, int8) == 1)) {
                CC_SETHIDE(true);
            };
            int8 = (int8 + 1);
        };
        if ((script7420(int0, int1, int2, int3, int4, int5, int6, int7) == 1)) {
            return;
        };
    };
    script7417(int0, int1, int2, int3, int4, int5, int6, int7, 0);
    return;
}