//
function script5581(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script4661();
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if (((int0 == 1) && (int1 >= 3))) {
        IF_SETPARAM_INT(4523, 1, 78184473);
        IF_SETPARAM_INT(4523, 1, 78184474);
        IF_SETPARAM_INT(4523, 1, 78184479);
        IF_SETPARAM_INT(4523, 1, 78184480);
    } else if (((int0 == 2) && (int1 >= 3))) {
        IF_SETPARAM_INT(4523, 1, 78184457);
        IF_SETPARAM_INT(4523, 1, 78184458);
        IF_SETPARAM_INT(4523, 1, 78184464);
        IF_SETPARAM_INT(4523, 1, 78184465);
    } else {
        IF_SETPARAM_INT(4523, 1, 78184457);
        IF_SETPARAM_INT(4523, 1, 78184458);
        IF_SETPARAM_INT(4523, 1, 78184479);
        IF_SETPARAM_INT(4523, 1, 78184480);
    };
    IF_SETONTIMER(callback(script5582, 78184452, 78184457, 78184458), 78184452);
    IF_SETONTIMER(callback(script5582, 78184459, 78184464, 78184465), 78184459);
    IF_SETONTIMER(callback(script5582, 78184466, 78184473, 78184474), 78184466);
    IF_SETONTIMER(callback(script5582, 78184467, 78184479, 78184480), 78184467);
    script8841(12, 1);
    return;
}