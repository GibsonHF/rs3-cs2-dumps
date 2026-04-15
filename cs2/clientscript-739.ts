//
function script739(int0: int): int {
    var int0 = (int0 - 1);
    var int1 = 1;
    var int2 = 1;
    var int3 = 0;
    define_array(36);
    var int4 = 0;
    if ((varclient_103 != varbitplayer_13480)) {
        varclient_103 = varbitplayer_13480;
    };
    int3 = varclient_103;
    while ((int1 <= 12)) {
        while ((int2 <= 3)) {
            int4 = MODULO(int3, 36);
            while ((push_array(int4) != 0)) {
                if ((++int4 == 36)) {
                    int4 = 0;
                };
            };
            if ((int4 == int0)) {
                return int1;
            };
            pop_array(int4, int1);
            int3 = (int3 * int3);
            int3 = (int3 - ((int3 / 1000000) * 1000000));
            int3 = (int3 / 100);
            int2 = (int2 + 1);
        };
        int1 = (int1 + 1);
        int2 = 1;
    };
    return 0;
}