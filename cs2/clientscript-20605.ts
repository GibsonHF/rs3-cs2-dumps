//
function script20605(int0: struct): void {
    IF_SETHIDE(true, comp(1495, 22));
    CC_DELETEALL(comp(1495, 35));
    if ((int0 == -1 as struct)) {
        return;
    };
    var int1 = struct_getparam(int0, 4717);
    if ((int1 == -1 as cs2enum)) {
        return;
    };
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    if ((int2 <= 1)) {
        return;
    };
    var int3 = ((int2 * 13) + ((int2 - 1) * 3));
    IF_SETSIZE(int3, 13, 0, 0, comp(1495, 35));
    var int4 = -1;
    var int5 = -1 as graphic;
    while ((++int4 < int2)) {
        if ((int4 == 0)) {
            int5 = 17038 as graphic;
        } else {
            int5 = 17039 as graphic;
        };
        script2994(comp(1495, 35), int4, 0, 0, 1, 1, 13, 13, 0, 0, int5);
        CC_SETONVARTRANSMIT(callback(script20606, -2147483645, -2147483643, 12607, 1));
        CC_SETOP(1, "Select");
    };
    var int6 = ((int3 / 2) + 20);
    IF_SETPOSITION((0 - int6), 0, 1, 1, comp(1495, 33));
    IF_SETPOSITION(int6, 0, 1, 1, comp(1495, 34));
    IF_SETHIDE(false, comp(1495, 22));
    return;
}