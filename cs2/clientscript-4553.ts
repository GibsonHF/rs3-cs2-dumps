//[clientscript,friends2_switchmode]
function script4553(int0: unknown_int, int1: component, int2: component, int3: component, int4: component): void {
    IF_SETONTIMER(callback(), int1);
    IF_SETONTIMER(callback(), int3);
    varclient_5113 = "";
    if ((int0 == 1)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(false, int3);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(false, int4);
        script4551(int3);
        script129(int3);
        IF_SETTEXT(`Friends List<br>RuneScape ${inttostring(MAP_WORLD(), 10)}`, script10587(int1));
    } else {
        IF_SETHIDE(true, int3);
        IF_SETHIDE(false, int1);
        IF_SETHIDE(true, int4);
        IF_SETHIDE(false, int2);
        script4552(int1);
        script125(int1, varclient_1036);
        IF_SETTEXT("Ignore List", script12029(int3));
    };
    return;
}