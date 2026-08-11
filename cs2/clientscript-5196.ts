//
function script5196(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = false;
    var int4 = 0;
    var int5 = 0;
    if ((varclient_1595 < 1)) {
        int2 = 1;
    };
    if ((varclient_1595 < 2)) {
        int3 = true;
    };
    if ((varclient_1595 < 3)) {
        int4 = 1;
    };
    if ((varclient_1595 < 4)) {
        int5 = 1;
    };
    script13996(73531519, 73531520, 28556, "", int1, script9670(0, int0));
    script13996(73531522, 73531523, 28556, "", int2, script9670(1, int0));
    script13996(73531525, 73531526, 28556, "", int3, script9670(2, int0));
    script13996(73531528, 73531529, 28556, "", int4, script9670(3, int0));
    script13996(73531531, 73531532, 28556, "", int5, script9670(4, int0));
    IF_SETHIDE(int3, comp(1122, 0));  // hcape_interface:reset_graphic
    script13971(73531515, 73531516, 28554, "Colour", int3);
    IF_SETHIDE(script12585(int4), comp(1122, 105));  // hcape_interface:trim_disabled_container
    script13971(73531517, 73531518, 28554, "Crest", int5);
    varclient_1600 = int0;
    script5202(1);
    return;
}