//
function script18612(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 2;
    var int3 = 3;
    var int4 = 120;
    var int5 = 20;
    var int6 = 6;
    if ((varbitplayer_58286 >= 4)) {
        int2 = 1;
        int3 = 7;
        int4 = SCALE(int4, 100, (100 - 40));
        int5 = SCALE(int5, 100, (100 - 40));
    };
    if ((varbitplayer_58286 >= 5)) {
        int6 = 15;
    };
    var string0 = `${string0}<br>- Attack <col=ffffff>${inttostring((int3 + 1), 10)}</col> times over <col=ffffff>${script15973(((int2 * int3) + 1), 1)}</col>.`;
    string0 = `${string0}<br>- ${script17720(int0, int4, (int4 + int5), 0, int1)} per hit.`;
    string0 = `${string0}<br>- <col=ffffff>Channelled</col>.`;
    string0 = `${string0}<br>- ${script17724(6, 6)}.`;
    string0 = `${string0}<br>- Completing the channel applies <sprite=17606><nbsp><col=ffffff>${struct_getparam(45563, 2794)}</col> to self for <col=ffffff>${script15973(int6, 1)}</col>.`;
    return string0;
}