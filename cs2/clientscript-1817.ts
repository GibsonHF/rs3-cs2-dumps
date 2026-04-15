//[proc,clanwars_end_victory]
function script1817(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    IF_SETTEXT("Victory!", int0);
    IF_SETPOSITION(75, 89, 0, 0, int0);
    IF_SETTEXT("Your clan is victorious.", int1);
    IF_SETPOSITION(79, 130, 0, 0, int1);
    IF_SETPOSITION(79, 180, 0, 0, int2);
    IF_SETSIZE(175, 125, 0, 0, int2);
    IF_SETPOSITION(52, 118, 0, 0, int3);
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    IF_SETHIDE(false, int2);
    IF_SETHIDE(false, int3);
    IF_SETHIDE(false, int4);
    IF_SETHIDE(true, int5);
    return;
}