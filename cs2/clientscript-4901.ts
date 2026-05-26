//
function script4901(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = 1;
    if ((CLANPROFILE_FIND() == 1)) {
        int4 = varbitclan_6507;
        int0 = script4904(0, 0, int4);
        if ((int0 != -1 as graphic)) {
            IF_SETGRAPHIC(int0, comp(1259, 24));
        };
        int1 = script4904(0, 1, int4);
        if ((int1 != -1 as graphic)) {
            IF_SETGRAPHIC(int1, comp(1259, 23));
        };
        int2 = script4904(0, 2, int4);
        if ((int2 != -1 as graphic)) {
            IF_SETGRAPHIC(int2, comp(1259, 22));
        };
        int3 = script4904(0, 3, int4);
        if ((int3 != -1 as graphic)) {
            IF_SETGRAPHIC(int3, comp(1259, 21));
        };
    };
    return;
}