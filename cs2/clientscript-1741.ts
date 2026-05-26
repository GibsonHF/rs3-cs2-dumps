//[proc,topstat_run_button_update]
function script1741(int0: number): void {
    var int1 = 18819;
    var int2 = 18818;
    var int3 = 18820;
    var int4 = 18821;
    var int5 = 18807;
    var int6 = 18808;
    IF_SETGRAPHIC(18807, int0);
    var int7 = 96010258;
    var int8 = 96010255;
    var int9 = 1;
    if ((script13749() == 1)) {
        int9 = 6;
        int7 = 21364741;
        int8 = 21364738;
    };
    if ((varclient_119 == 1)) {
        IF_SETGRAPHIC(int2, int7);
        IF_SETGRAPHIC(int6, int8);
        IF_SETOP(int9, "Toggle Run", int0);
    } else if ((varclient_119 == 0)) {
        IF_SETGRAPHIC(int1, int7);
        IF_SETGRAPHIC(int5, int8);
        IF_SETOP(int9, "Toggle Run", int0);
    } else if ((varclient_119 == 3)) {
        IF_SETGRAPHIC(int3, int7);
    } else if ((varclient_119 == 4)) {
        IF_SETGRAPHIC(int4, int7);
    };
    return;
}