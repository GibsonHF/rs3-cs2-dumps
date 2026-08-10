//[proc,topstat_run_button_update]
function script1741(int0: number): void {
    var int1 = 18819 as graphic;
    var int2 = 18818 as graphic;
    var int3 = 18820 as graphic;
    var int4 = 18821 as graphic;
    var int5 = 18807 as graphic;
    var int6 = 18808 as graphic;
    IF_SETGRAPHIC(18807 as graphic, int0);
    var int7 = comp(1465, 19);
    var int8 = comp(1465, 16);
    var int9 = 1;
    if ((script13749() == 1)) {
        int9 = 6;
        int7 = comp(326, 5);
        int8 = comp(326, 2);
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