//[proc,music_search_close]
function script3683(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int): void {
    script1548(14);
    varclient_2249 = "";
    IF_SETONTIMER(callback(script832, int0, int1, int2, int3, int4, int5, int6), int0);
    stack(16944);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}