//
function script15991(int0: int, int1: unknown_int): int {
    var int2 = 1;
    var int3 = script11803();
    if (((((script15992(int0, int1) == 1) || (script15993(int0) == 1)) && (int0 <= int3)) && (int0 >= 0))) {
        return int0;
    };
    while ((int2 <= int3)) {
        if ((script15993(int2) == 1)) {
            return int2;
        };
        int2 = (int2 + 1);
    };
    script12478("Couldn't find a free action bar preset for initialising a new additional action bar since all action bar presets are displayed at the same time. This should be impossible!");
    return -1;
}