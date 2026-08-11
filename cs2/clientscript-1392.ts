//
function script1392(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1931, 18));  // slide_puzzle:puzzle_layer
        IF_SETHIDE(true, comp(1931, 17));  // slide_puzzle:puzzle_check
        IF_SETHIDE(false, comp(1931, 19));  // slide_puzzle:puzzle_hint
    } else {
        IF_SETHIDE(false, comp(1931, 18));  // slide_puzzle:puzzle_layer
        IF_SETHIDE(false, comp(1931, 17));  // slide_puzzle:puzzle_check
        IF_SETHIDE(true, comp(1931, 19));  // slide_puzzle:puzzle_hint
    };
    return;
}