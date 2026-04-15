//
function script17049(int0: int, int1: unknown_int): string {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "n/a";
    var int5 = varplayer_5984;
    if (((int0 > 0) && (int5 >= 3000))) {
        [int2, int3, int4] = script4705((int5 / int0));
        string0 = script3382(0, int2, int3, int4, int1, 1);
    };
    return string0;
}