//
function script8890(int0: component, int1: component, int2: struct, int3: int, int4: int): int {
    var int5 = int3;
    var int6 = int3;
    var int7 = int4;
    if ((struct_getparam(int2, 6523) != -1 as stat)) {
        var [int3, int4] = script8892(int0, struct_getparam(int2, 6523), struct_getparam(int2, 8023), int3, int4, int5);
    };
    if ((struct_getparam(int2, 6524) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 6524), struct_getparam(int2, 8024), int3, int4, int5);
    };
    if ((struct_getparam(int2, 6591) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 6591), struct_getparam(int2, 8025), int3, int4, int5);
    };
    if ((struct_getparam(int2, 6592) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 6592), struct_getparam(int2, 8026), int3, int4, int5);
    };
    if ((struct_getparam(int2, 7704) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 7704), struct_getparam(int2, 8027), int3, int4, int5);
    };
    if ((struct_getparam(int2, 7740) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 7740), struct_getparam(int2, 8028), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8020) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 8020), struct_getparam(int2, 8029), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8021) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 8021), struct_getparam(int2, 8030), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8022) != -1 as stat)) {
        [int3, int4] = script8892(int0, struct_getparam(int2, 8022), struct_getparam(int2, 8031), int3, int4, int5);
    };
    if (((int7 != int4) || (int6 != int3))) {
        int4 = (int4 + 50);
    };
    int6 = int5;
    int3 = int5;
    int7 = int4;
    if ((struct_getparam(int2, 8032) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8032), struct_getparam(int2, 8041), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8033) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8033), struct_getparam(int2, 8042), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8034) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8034), struct_getparam(int2, 8043), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8035) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8035), struct_getparam(int2, 8044), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8036) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8036), struct_getparam(int2, 8045), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8037) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8037), struct_getparam(int2, 8046), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8038) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8038), struct_getparam(int2, 8047), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8039) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8039), struct_getparam(int2, 8048), int3, int4, int5);
    };
    if ((struct_getparam(int2, 8040) != -1 as obj)) {
        [int3, int4] = script8893(int0, struct_getparam(int2, 8040), struct_getparam(int2, 8049), int3, int4, int5);
    };
    var int8 = struct_getparam(int2, 6522);
    if ((int8 > 0)) {
        [int3, int4] = script8893(int0, 24154 as obj, int8, int3, int4, int5);
    };
    if (((int7 != int4) || (int6 != int3))) {
        int4 = (int4 + 50);
    };
    int6 = int5;
    int3 = int5;
    int7 = int4;
    var string0 = struct_getparam(int2, 8050);
    if (((int0 != comp(1524, 92)) && (strcmp(string0, "") != 0))) {
        int4 = script8891(int0, string0, int5, int4, 0);
    };
    if ((int1 != comp(-1, 65535))) {
        if ((int4 > IF_GETHEIGHT(int0))) {
            IF_SETSCROLLSIZE(0, int4, int0);
        } else {
            IF_SETSCROLLSIZE(0, 0, int0);
        };
        IF_SETSCROLLPOS(0, 0, int0);
        script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    return int4;
}