//
function script2371(int0: number): void {
    var int1 = (100 + RANDOM(25));
    var int2 = IF_GETWIDTH(comp(1253, 121));
    var int3 = (CLIENTCLOCK() + 800);
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961 as vorbis, 1, 0, int1, 15, 15));
    IF_SETONTIMER(callback(), comp(1253, 116));
    IF_SETONTIMER(callback(script1549, int3), comp(1253, 111));
    IF_SETGRAPHIC(29467 as graphic, comp(1253, 113));
    IF_SETGRAPHIC(29467 as graphic, comp(1253, 114));
    IF_SETGRAPHIC(29467 as graphic, comp(1253, 115));
    switch (int0) {
        case 0: {
            IF_SETPOSITION(0, 0, 0, 0, comp(1253, 117));
            IF_SETPOSITION(int2, 0, 0, 0, comp(1253, 121));
            IF_SETPOSITION((int2 * 2), 0, 0, 0, comp(1253, 119));
            IF_SETGRAPHIC(29466 as graphic, comp(1253, 113));
            break;
        }
        case 1: {
            IF_SETPOSITION(0, 0, 0, 0, comp(1253, 121));
            IF_SETPOSITION(int2, 0, 0, 0, comp(1253, 119));
            IF_SETPOSITION((int2 * 2), 0, 0, 0, comp(1253, 117));
            IF_SETGRAPHIC(29466 as graphic, comp(1253, 114));
            break;
        }
        case 2: {
            IF_SETPOSITION(0, 0, 0, 0, comp(1253, 119));
            IF_SETPOSITION(int2, 0, 0, 0, comp(1253, 117));
            IF_SETPOSITION((int2 * 2), 0, 0, 0, comp(1253, 121));
            IF_SETGRAPHIC(29466 as graphic, comp(1253, 115));
            break;
        }
    };
    return;
}