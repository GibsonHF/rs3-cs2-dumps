//
function script20741(int0: number): void {
    if ((varbitclient_61229 == 1)) {
        return;
    };
    if ((int0 == -1)) {
        var int0 = SCALE(IF_GETWIDTH(comp(1477, 26)), 100, 33);
    };
    var int1 = script20789(int0, 0, 1);
    IF_SETSIZE(int1, SCALE(16384, 100, 66), 0, 2, comp(1512, 7));
    script20742(int1);
    script20790(99090441, 99090452, 99090444, 99090442, 99090453, 99090443, 99090454, -1, -1, 0);
    script20791(99090442);
    script20801(99090443, varbitclient_61226, varbitclient_61227, 99090446, 99090450, 99090447, 99090448, 99090449, -1);
    script20806(99090446, 99090450, 99090447, 99090448, 99090449, varbitclient_61228, -1, 1);
    IF_SETONRESIZE(callback(), comp(1512, 9));
    return;
}