//[proc,music_search_close]
function script3683(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    script1548(14);
    varclient_2249 = "";
    IF_SETONTIMER(callback(script832, int0, int1, int2, int3, int4, int5, int6), int0);
    stack(16944);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}