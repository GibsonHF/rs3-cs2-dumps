//
function script18618(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = script17444(int0);
    if (((int0 == 19254 as struct) && (varbitplayer_30983 > 0))) {
        int2 = (int2 + SCALE(int2, 100, 26));
    };
    var string0 = `${string0}<br>- Creates a ${script18554(7)} at your location.`;
    if ((varbitplayer_58286 >= 3)) {
        string0 = `${string0}<br>- <col=3366FF>Magic attacks</col> deal ${script17717(150)} and gain <col=ffffff>${script7653((varbitplayer_58286 * 15), 1, 1, 0, 1)}% Critical Strike Chance</col> while inside the area.`;
    } else {
        string0 = `${string0}<br>- <col=3366FF>Magic attacks</col> deal ${script17717(150)} while inside the area.`;
    };
    if (((int0 != 19254 as struct) || (varbitplayer_30983 <= 0))) {
        string0 = `${string0}<br>- ${script17720(int0, 10, (10 + 10), 0, int1)} per hit every <col=ffffff>${script15973(3, 1)}</col> to the target while it is inside the area.`;
    };
    string0 = `${string0}<br>- ${script17710(int2)}.`;
    return string0;
}