//
function script17123(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    if ((int0 == 1)) {
        IF_SETONOP(callback(script3048), comp(1044, 49));
        IF_SETONOP(callback(script11475, 68419608), 68419634);
        IF_SETTEXT("Friends List", 68419616);
        IF_SETHIDE(0, 68419623);
        IF_SETSIZE(142, 0, 0, 1, 68419620);
        script3029(int1, int2, int3, int4, int5, int6, int7, int8, int9);
        IF_BUTTON_SETTOGGLED(1, 68419612);
        IF_BUTTON_SETTOGGLED(0, 68419614);
        IF_SETGRAPHIC(24760, 68419613);
        IF_SETGRAPHIC(24779, 68419615);
    } else {
        IF_SETONOP(callback(script3050), comp(1044, 49));
        CC_DELETEALL(68419630);
        IF_SETTEXT("Ignore List", 68419616);
        IF_SETHIDE(1, 68419623);
        IF_SETSIZE(0, 0, 1, 1, 68419620);
        script3041(int1, int2, int4, int5, int6, int7, int9);
        IF_BUTTON_SETTOGGLED(0, 68419612);
        IF_BUTTON_SETTOGGLED(1, 68419614);
        IF_SETGRAPHIC(24761, 68419613);
        IF_SETGRAPHIC(24778, 68419615);
        script7871(68419634, 0, 1, 0, 0);
    };
    varclient_7113 = -1;
    return;
}