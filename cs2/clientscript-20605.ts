//
function script20605(int0: number): void {
    IF_SETHIDE(1, 97976342);
    CC_DELETEALL(97976355);
    if ((int0 == -1)) {
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
    IF_SETSIZE(int3, 13, 0, 0, 97976355);
    var int4 = -1;
    var int5 = -1;
    while ((++int4 < int2)) {
        if ((int4 == 0)) {
            int5 = 17038;
        } else {
            int5 = 17039;
        };
        script2994(97976355, int4, 0, 0, 1, 1, 13, 13, 0, 0, int5);
        CC_SETONVARTRANSMIT(callback(script20606, -2147483645, -2147483643, 12607, 1));
        CC_SETOP(1, "Select");
    };
    var int6 = ((int3 / 2) + 20);
    IF_SETPOSITION((0 - int6), 0, 1, 1, 97976353);
    IF_SETPOSITION(int6, 0, 1, 1, 97976354);
    IF_SETHIDE(0, 97976342);
    return;
}