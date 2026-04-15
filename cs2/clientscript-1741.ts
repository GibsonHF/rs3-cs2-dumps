//[proc,topstat_run_button_update]
function script1741(int0: unknown_int): void {
    var int1 = 18819;
    var int2 = 18818;
    var int3 = 18820;
    var int4 = 18821;
    var int5 = 18807;
    var int6 = 18808;
    stack(18807);
    stack(int0);
    IF_SETGRAPHIC();
    var int7 = 96010258;
    var int8 = 96010255;
    var int9 = 1;
    if ((script13749() == 1)) {
        int9 = 6;
        int7 = 21364741;
        int8 = 21364738;
    };
    if ((varclient_119 == 1)) {
        stack(int2);
        stack(int7);
        IF_SETGRAPHIC();
        stack(int6);
        stack(int8);
        IF_SETGRAPHIC();
        IF_SETOP(int9, "Toggle Run", int0);
    } else if ((varclient_119 == 0)) {
        stack(int1);
        stack(int7);
        IF_SETGRAPHIC();
        stack(int5);
        stack(int8);
        IF_SETGRAPHIC();
        IF_SETOP(int9, "Toggle Run", int0);
    } else if ((varclient_119 == 3)) {
        stack(int3);
        stack(int7);
        IF_SETGRAPHIC();
    } else if ((varclient_119 == 4)) {
        stack(int4);
        stack(int7);
        IF_SETGRAPHIC();
    };
    return;
}