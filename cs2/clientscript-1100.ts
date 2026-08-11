//
function script1100(int0: number): number {
    var int1 = 40;
    IF_SETPOSITION(0, int0, 0, 0, comp(91, 12));  // rand_party_side_new:options_layer
    IF_SETSIZE(0, int1, 1, 0, comp(91, 12));  // rand_party_side_new:options_layer
    return (int0 + int1);
}