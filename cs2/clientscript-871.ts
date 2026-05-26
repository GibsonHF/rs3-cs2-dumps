//
function script871(): void {
    var int0 = (20 - 0);
    var int1 = (80 - 0);
    var int2 = (int1 / int0);
    var int3 = (varbitplayer_14325 * int2);
    var int4 = (1024 / int1);
    varclient_111 = int3;
    var int5 = (varclient_111 * int4);
    int5 = (int5 + 512);
    int5 = (2048 - int5);
    IF_SETMODELANGLE(0, 0, 0, 0, int5, 388, comp(717, 4));
    script896();
    var int6 = (enum_getvalue(0, 0, 1422 as cs2enum, varbitplayer_14321) * (1024 / int0));
    int6 = (int6 + 512);
    IF_SETMODELANGLE(0, 0, 0, 0, int6, 365, comp(717, 3));
    return;
}