//[proc,clanwars_setup_createbox]
function script1086(int0: component, int1: int, int2: int, int3: int): void {
    CC_DELETEALL(int0);
    var int4 = IF_GETWIDTH(int0);
    var int5 = IF_GETHEIGHT(int0);
    var int6 = 0;
    script8561(int0, 0, 0, (int5 - 2));
    if ((int1 > 0)) {
        script76(int0, 0, int1, (int4 - 2));
    };
    if ((int2 > 0)) {
        script76(int0, 0, int2, (int4 - 2));
    };
    if ((int3 > 0)) {
        script76(int0, 0, int3, (int4 - 2));
    };
    script76(int0, 0, 0, (int4 - 2));
    script8561(int0, (int4 - 2), 0, (int5 - 1));
    script78(int0, 0, (int5 - 2), int4);
    return;
}