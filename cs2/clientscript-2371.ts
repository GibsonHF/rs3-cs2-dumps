//
function script2371(int0: number): void {
    var int1 = (100 + RANDOM(25));
    var int2 = IF_GETWIDTH(82116729);
    var int3 = (CLIENTCLOCK() + 800);
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961, 1, 0, int1, 15, 15));
    IF_SETONTIMER(callback(), 82116724);
    IF_SETONTIMER(callback(script1549, int3), 82116719);
    stack(29467);
    stack(82116721);
    IF_SETGRAPHIC();
    stack(29467);
    stack(82116722);
    IF_SETGRAPHIC();
    stack(29467);
    stack(82116723);
    IF_SETGRAPHIC();
    switch (int0) {
        case 0: {
            IF_SETPOSITION(0, 0, 0, 0, 82116725);
            IF_SETPOSITION(int2, 0, 0, 0, 82116729);
            IF_SETPOSITION((int2 * 2), 0, 0, 0, 82116727);
            stack(29466);
            stack(82116721);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            IF_SETPOSITION(0, 0, 0, 0, 82116729);
            IF_SETPOSITION(int2, 0, 0, 0, 82116727);
            IF_SETPOSITION((int2 * 2), 0, 0, 0, 82116725);
            stack(29466);
            stack(82116722);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            IF_SETPOSITION(0, 0, 0, 0, 82116727);
            IF_SETPOSITION(int2, 0, 0, 0, 82116725);
            IF_SETPOSITION((int2 * 2), 0, 0, 0, 82116729);
            stack(29466);
            stack(82116723);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}