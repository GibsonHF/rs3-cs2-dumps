//
function script16392(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int3 == 0)) {
        script16388(int0, int1);
        IF_SETHIDE(true, comp(955, 23));  // uitutorial:arrow_below
        IF_SETHIDE(true, comp(955, 21));  // uitutorial:arrow_above
        IF_SETHIDE(true, comp(955, 27));  // uitutorial:arrow_left
        IF_SETHIDE(true, comp(955, 25));  // uitutorial:arrow_right
        return;
    };
    CC_DELETEALL(comp(955, 9));  // uitutorial:arrow_layer
    script16404(int0, int1, int7, int5);
    return;
}