//
function script4902(int0: component, int1: unknown_int, int2: int, int3: int, int4: unknown_int): void {
    var int5 = 0;
    if ((IF_GETWIDTH(int0) < IF_GETHEIGHT(int0))) {
        int5 = 1;
    };
    if ((varbitplayer_27168 == 1)) {
        if ((int2 >= 10)) {
            var int2 = (int2 / 10);
        } else if ((int2 > 0)) {
            int2 = 1;
        } else {
            int2 = 0;
        };
        var int3 = MAX(1, (int3 / 10));
    };
    script8126(int0, int2, int3, int5, 0, 0, int1, int4);
    return;
}