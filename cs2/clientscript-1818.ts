//[proc,clanwars_end_defeat]
function script1818(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    IF_SETTEXT("Defeat!", int0);
    IF_SETPOSITION(64, 49, 0, 0, int0);
    IF_SETTEXT("Your clan has been defeated.", int1);
    IF_SETPOSITION(41, 93, 0, 0, int1);
    IF_SETPOSITION(41, 179, 0, 0, int2);
    IF_SETSIZE(180, 125, 0, 0, int2);
    IF_SETPOSITION(38, 81, 0, 0, int3);
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    IF_SETHIDE(false, int2);
    IF_SETHIDE(false, int3);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(false, int5);
    return;
}