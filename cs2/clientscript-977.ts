//
function script977(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    script8421(int2, int3, int4, int5, "Lucky Dip", 21218, -1, 1, -1, -1);
    script13969(13369349, -1, 41028, struct_getparam(int0, 7423));
    IF_SETGRAPHIC(struct_getparam(int0, 7424), comp(204, 3));  // rsraffle:background
    script16040(int0, int1);
    IF_SETPOSITION(0, (int1 * (40 + 1)), 0, 0, comp(204, 21));  // rsraffle:active_button
    IF_SETONVARTRANSMIT(callback(script979, int0, 8046, 1), comp(204, 2));  // rsraffle:mainmodal_window_content
    IF_SETONVARTRANSMIT(callback(script987, int0, 8048, 1), comp(204, 95));  // rsraffle:enter_window
    IF_SETONVARTRANSMIT(callback(script981, int0, 8043, 8043, 8725, 10165, 8046, 5), comp(204, 45));  // rsraffle:right_panel
    IF_SETONOP(callback(script986, int0), comp(204, 120));  // rsraffle:ticket_input_decrease
    return;
}