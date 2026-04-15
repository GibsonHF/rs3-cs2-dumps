//
function script5196(int0: int): void {
    var int1 = false;
    var int2 = false;
    var int3 = false;
    var int4 = false;
    var int5 = false;
    if ((varclient_1595 < 1)) {
        int2 = true;
    };
    if ((varclient_1595 < 2)) {
        int3 = true;
    };
    if ((varclient_1595 < 3)) {
        int4 = true;
    };
    if ((varclient_1595 < 4)) {
        int5 = true;
    };
    script13996(comp(1122, 127), comp(1122, 128), 28556 as struct, "", int1, script9670(0, int0));
    script13996(comp(1122, 130), comp(1122, 131), 28556 as struct, "", int2, script9670(1, int0));
    script13996(comp(1122, 133), comp(1122, 134), 28556 as struct, "", int3, script9670(2, int0));
    script13996(comp(1122, 136), comp(1122, 137), 28556 as struct, "", int4, script9670(3, int0));
    script13996(comp(1122, 139), comp(1122, 140), 28556 as struct, "", int5, script9670(4, int0));
    IF_SETHIDE(int3, comp(1122, 0));
    script13971(comp(1122, 123), comp(1122, 124), 28554 as struct, "Colour", int3);
    IF_SETHIDE(script12585(int4), comp(1122, 105));
    script13971(comp(1122, 125), comp(1122, 126), 28554 as struct, "Crest", int5);
    varclient_1600 = int0;
    script5202(1);
    return;
}