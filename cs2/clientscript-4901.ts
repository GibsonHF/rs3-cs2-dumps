//
function script4901(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = 1;
    if ((CLANPROFILE_FIND() == 1)) {
        int4 = varbitclan_6507;
        int0 = script4904(0, 0, int4);
        if ((int0 != -1)) {
            IF_SETGRAPHIC(int0, 82509848);
        };
        int1 = script4904(0, 1, int4);
        if ((int1 != -1)) {
            IF_SETGRAPHIC(int1, 82509847);
        };
        int2 = script4904(0, 2, int4);
        if ((int2 != -1)) {
            IF_SETGRAPHIC(int2, 82509846);
        };
        int3 = script4904(0, 3, int4);
        if ((int3 != -1)) {
            IF_SETGRAPHIC(int3, 82509845);
        };
    };
    return;
}