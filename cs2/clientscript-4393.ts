//[proc,clan_build_motif_layer]
function script4393(int0: component, int1: component, int2: cs2enum): void {
    CC_DELETEALL(int0);
    var int3 = 0;
    var int4 = IF_GETWIDTH(int0);
    var int5 = 5;
    var int6 = 5;
    var int7 = ENUM_GETOUTPUTCOUNT(int2);
    while ((int3 < int7)) {
        CC_CREATE(int0, 5, int3);
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(int5, int6, 0, 0);
        CC_SETGRAPHIC(enum_getvalue(0, 23, int2, (int3 + 1)));
        CC_SETOP(1, "Select");
        int3 = (int3 + 1);
        if (((++int5 + 65) > int4)) {
            int5 = 5;
            int6 = (int6 + 60);
        };
    };
    if ((int5 > 5)) {
        int6 = (int6 + 60);
    };
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, int6, int0);
    script7791(int1, int0);
    return;
}