//[proc,rough_angle]
function script3500(int0: int, int1: int, int2: int, int3: int): int {
    var int4 = (int2 - int0);
    var int5 = (int3 - int1);
    if ((int5 > 0)) {
        if ((int4 > 0)) {
            if ((int5 > int4)) {
                return ((8192 * int4) / int5);
            };
            return (16384 - ((8192 * int5) / int4));
        };
        if ((int4 < 0)) {
            if (((0 - int4) > int5)) {
                return ((16384 * 3) - ((8192 * int5) / int4));
            };
            return ((16384 * 4) + ((8192 * int4) / int5));
        };
        return 0;
    };
    if ((int5 < 0)) {
        if ((int4 > 0)) {
            if ((int4 > (0 - int5))) {
                return (16384 - ((8192 * int5) / int4));
            };
            return ((16384 * 2) + ((8192 * int4) / int5));
        };
        if ((int4 < 0)) {
            if ((int5 < int4)) {
                return ((16384 * 2) + ((8192 * int4) / int5));
            };
            return ((16384 * 3) - ((8192 * int5) / int4));
        };
        return (16384 * 2);
    };
    if ((int4 > 0)) {
        return 16384;
    };
    if ((int4 < 0)) {
        return (16384 * 3);
    };
    return -1;
}