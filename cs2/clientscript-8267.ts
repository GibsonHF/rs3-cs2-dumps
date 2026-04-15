//
function script8267(): void {
    varclient_3699 = varplayer_3814;
    script8306();
    script8352();
    var int0 = -1;
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    while ((int2 < int3)) {
        int0 = enum_getvalue(0, 0, 7717 as cs2enum, int2);
        int1 = script10405(int0);
        if ((int1 != -1 as struct)) {
            script8268(int0, 0);
            if ((((struct_getparam(int1, 3514) != comp(-1, 65535)) && (struct_getparam(int1, 6643) == true)) && (script6354(struct_getparam(int1, 3514)) == 1))) {
                script8268(int0, 1);
            };
        };
        int2 = (int2 + 1);
    };
    script8268(1001, 0);
    script8256(varplayer_7624);
    return;
}