//
function script17123(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int): void {
    if ((int0 == 1)) {
        IF_SETONOP(callback(script3048), comp(1044, 49));
        IF_SETONOP(callback(script11475, 68419608), 68419634);
        IF_SETTEXT("Friends List", 68419616);
        IF_SETHIDE(0, 68419623);
        IF_SETSIZE(142, 0, 0, 1, 68419620);
        script3029(int1, int2, int3, int4, int5, int6, int7, int8, int9);
        IF_BUTTON_SETTOGGLED(1, 68419612);
        IF_BUTTON_SETTOGGLED(0, 68419614);
        stack(24760);
        stack(68419613);
        IF_SETGRAPHIC();
        stack(24779);
        stack(68419615);
        IF_SETGRAPHIC();
    } else {
        IF_SETONOP(callback(script3050), comp(1044, 49));
        CC_DELETEALL(68419630);
        IF_SETTEXT("Ignore List", 68419616);
        IF_SETHIDE(1, 68419623);
        IF_SETSIZE(0, 0, 1, 1, 68419620);
        script3041(int1, int2, int4, int5, int6, int7, int9);
        IF_BUTTON_SETTOGGLED(0, 68419612);
        IF_BUTTON_SETTOGGLED(1, 68419614);
        stack(24761);
        stack(68419613);
        IF_SETGRAPHIC();
        stack(24778);
        stack(68419615);
        IF_SETGRAPHIC();
        script7871(68419634, 0, 1, 0, 0);
    };
    varclient_7113 = -1;
    return;
}