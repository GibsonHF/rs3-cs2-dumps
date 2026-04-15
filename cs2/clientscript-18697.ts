//
function script18697(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = script17444(int0);
    if (((int0 == 19251 as struct) && (varbitplayer_30983 > 0))) {
        int2 = (int2 + SCALE(int2, 100, 26));
    };
    var string0 = `${string0}<br>- <col=25AD37>Ranged attacks</col> deal ${script17717(150)}.`;
    string0 = `${string0}<br>- ${script17710(int2)}.`;
    return string0;
}