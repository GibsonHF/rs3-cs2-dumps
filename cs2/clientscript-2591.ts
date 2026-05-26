//
function script2591(int0: number, int1: number, int2: number): void {
    if ((varplayer_8331 == -1 as dbrow)) {
        script12478("Error, unable to find a material dbrow in smithing_interface_re_draw");
        return;
    };
    if ((int0 != -1 as dbrow)) {
        varplayer_8332 = int0;
    };
    if ((int1 != -1 as obj)) {
        varplayer_8333 = int1;
    };
    if ((int2 != -1)) {
        varbitplayer_43239 = int2;
    };
    script2584(varplayer_8331, 2424845, 2424883, 2424884, 2424846, 2424893, 2424894, 2424847, 2424903, 2424904, 2424848, 2424913, 2424914, 2424856, 2424923, 2424924, 3, 0);
    script2584(varplayer_8332, 2424925, 2424934, 2424935, 2424936, 2424945, 2424946, 2424947, 2424956, 2424957, 2424958, 2424967, 2424968, 2424969, 2424978, 2424979, 4, 0);
    script2598();
    return;
}