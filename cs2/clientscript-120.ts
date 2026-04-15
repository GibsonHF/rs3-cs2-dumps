//[clientscript,pattern_spin]
function script120(int0: component): void {
    var int1 = RANDOM(63);
    var int2 = RANDOM(127);
    IF_SETMODELTINT(int1, 4, 60, int2, int0);
    var int3 = (RANDOMINC(25) + 10);
    var int4 = (RANDOMINC(25) + 20);
    var int5 = (CLIENTCLOCK() + 100);
    IF_SETONTIMER(callback(script5612, int0, int1, int2, RANDOM(2), int5, int3, int4), int0);
    return;
}