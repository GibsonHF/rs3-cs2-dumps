//
function script3613(): int {
    var int0 = -1;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    while ((++int0 < 10)) {
        [int1, int2, int3] = script3614(int0);
        if ((int1 != -1 as obj)) {
            int4 = (int4 + 1);
        };
    };
    return int4;
}