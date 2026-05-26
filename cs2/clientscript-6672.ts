//
function script6672(int0: number, int1: number): void {
    var int2 = script15513();
    var int3 = 40932 as obj;
    if ((int2 != -1)) {
        if (((varplayer_7101 == 52555 as obj) || (varplayer_7101 == 52860 as obj))) {
            int3 = varplayer_7101;
        } else if ((struct_getparam(int2, 5396) != 40932 as obj)) {
            if ((varplayer_7101 != -1 as obj)) {
                int3 = varplayer_7101;
            } else {
                int3 = struct_getparam(int2, 5396);
            };
        };
    };
    var int4 = 1;
    var string0 = `Convert your prize to : ${OC_NAME(int3)}.`;
    var string1 = `This prize cannot be converted to : ${OC_NAME(int3)}.`;
    if ((varclient_1790 == 7)) {
        string0 = "Treasure Hunter is not available at the moment. Please try later.";
        string1 = "Treasure Hunter is not available at the moment. Please try later.";
        int4 = 0;
    } else if ((varclient_1790 == 10)) {
        string0 = "Loading...";
        string1 = "Loading...";
        int4 = 0;
    } else if ((script328(int0) == 1)) {
        int4 = 0;
    };
    IF_SETOP(1, `Convert to : ${OC_NAME(int3)}`, 82116890);
    IF_SETENABLED(int4, 82116890);
    if ((int4 == 1)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 82116890);
    } else {
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -1), 82116890);
    };
    return;
}