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
        IF_SETPARAM_INT(4523, 1, comp(1193, 25));
        IF_SETPARAM_INT(4523, 1, comp(1193, 26));
        IF_SETPARAM_INT(4523, 1, comp(1193, 31));
        IF_SETPARAM_INT(4523, 1, comp(1193, 32));
    } else if (((int0 == 2) && (int1 >= 3))) {
        IF_SETPARAM_INT(4523, 1, comp(1193, 9));
        IF_SETPARAM_INT(4523, 1, comp(1193, 10));
        IF_SETPARAM_INT(4523, 1, comp(1193, 16));
        IF_SETPARAM_INT(4523, 1, comp(1193, 17));
    } else {
        IF_SETPARAM_INT(4523, 1, comp(1193, 9));
        IF_SETPARAM_INT(4523, 1, comp(1193, 10));
        IF_SETPARAM_INT(4523, 1, comp(1193, 31));
        IF_SETPARAM_INT(4523, 1, comp(1193, 32));
    };
    IF_SETONTIMER(callback(script5582, 78184452, 78184457, 78184458), 78184452);
    IF_SETONTIMER(callback(script5582, 78184459, 78184464, 78184465), 78184459);
    IF_SETONTIMER(callback(script5582, 78184466, 78184473, 78184474), 78184466);
    IF_SETONTIMER(callback(script5582, 78184467, 78184479, 78184480), 78184467);
    script8841(12, 1);
    return;
}