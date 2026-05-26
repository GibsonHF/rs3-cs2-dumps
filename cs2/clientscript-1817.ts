//[proc,clanwars_end_victory]
function script1817(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    IF_SETTEXT("Victory!", int0);
    IF_SETPOSITION(75, 89, 0, 0, int0);
    IF_SETTEXT("Your clan is victorious.", int1);
    IF_SETPOSITION(79, 130, 0, 0, int1);
    IF_SETPOSITION(79, 180, 0, 0, int2);
    IF_SETSIZE(175, 125, 0, 0, int2);
    IF_SETPOSITION(52, 118, 0, 0, int3);
    IF_SETHIDE(0, int0);
    IF_SETHIDE(0, int1);
    IF_SETHIDE(0, int2);
    IF_SETHIDE(0, int3);
    IF_SETHIDE(0, int4);
    IF_SETHIDE(1, int5);
    return;
}