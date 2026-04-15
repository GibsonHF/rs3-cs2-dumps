//
function script18609(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 2;
    var int3 = 70;
    var int4 = 20;
    var int5 = 30;
    var int6 = 5;
    if ((int0 == 45046 as struct)) {
        int2 = 6;
        int3 = 80;
        int4 = 20;
        int5 = 50;
        int6 = 5;
    };
    if ((varbitplayer_30980 > 0)) {
        int5 = (int5 + (5 + (5 * varbitplayer_30980)));
    };
    var string0 = `${string0}<br>- ${script17720(int0, int3, (int3 + int4), 0, int1)} to the target and up to ${script18561(int2)} within ${script17709(int6)} of the target.`;
    string0 = `${string0}<br>- Your next <col=ffffff>${script17707(1, 1)}</col> <col=3366FF>Magic ability</col> against the target within <col=ffffff>${script15973(10, 1)}</col> will also target the additional enemies, dealing <col=ffffff>${inttostring(int5, 10)}%</col> damage.`;
    return string0;
}