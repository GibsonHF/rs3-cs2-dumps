//
function script5615(int0: number): void {
    var int1 = (CLIENTCLOCK() + 100);
    IF_SETONTIMER(callback(script5612, int0, RANDOM(63), RANDOM(127), RANDOM(2), int1, 25, 18), int0);
    return;
}