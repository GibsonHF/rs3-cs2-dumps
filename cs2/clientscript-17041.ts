//
function script17041(int0: dbrow, int1: int, int2: unknown_int, int3: component, int4: int, int5: int, int6: int): void {
    if ((CC_FIND(int3, int4) == 1)) {
        if ((int1 <= 0)) {
            var int1 = script5747(int0);
        };
        if ((int1 > 0)) {
            if ((int2 == 1)) {
                script17042(int1, int3, int4, int5, int6);
            };
            CC_SETHIDE(false);
        } else {
            CC_SETHIDE(true);
        };
    };
    return;
}