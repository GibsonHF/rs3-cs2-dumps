//
function script1105(int0: number): number {
    var int1 = 60;
    var int2 = 30;
    if ((script6431() == 1)) {
        int2 = 40;
        int1 = (int1 + 30);
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(91, 15));  // rand_party_side_new:misc_layer
    IF_SETSIZE(0, int1, 1, 0, comp(91, 15));  // rand_party_side_new:misc_layer
    IF_SETPOSITION(0, 0, 0, 0, comp(91, 27));  // rand_party_side_new:party_floor_layer
    IF_SETSIZE(0, int2, 1, 0, comp(91, 27));  // rand_party_side_new:party_floor_layer
    IF_SETPOSITION(0, int2, 0, 0, comp(91, 33));  // rand_party_side_new:party_complexity_layer
    IF_SETSIZE(0, int2, 1, 0, comp(91, 33));  // rand_party_side_new:party_complexity_layer
    return ((int0 + int1) - 4);
}