//
function script19638(int0: obj, string0: string): string {
    var int1 = 75;
    var int2 = 125;
    var int3 = varbitplayer_56740;
    var int4 = varbitplayer_36288;
    if ((item_getparam(int0, 4079) == 1)) {
        int1 = 80;
        int2 = 130;
    };
    if ((item_getparam(int0, 4080) == 1)) {
        int1 = 85;
        int2 = 135;
    };
    if ((item_getparam(int0, 4081) == 1)) {
        int1 = 90;
        int2 = 140;
    };
    if ((item_getparam(int0, 6599) == 1)) {
        int1 = 95;
        int2 = 145;
    };
    if ((int3 == 0)) {
        var string0 = `${string0}- <col=FFA11A>Melee</col>, <col=25AD37>Ranged</col> and <col=3366FF>Magic</col> attacks against your active Slayer Assignment have ${script7653(int2, 1, 1, 1, 1)}% increased accuracy, and deal ${script7653(int1, 1, 1, 1, 1)}% increased damage.`;
    } else {
        string0 = `${string0}- <col=FFA11A>Melee</col>, <col=25AD37>Ranged</col>, <col=3366FF>Magic</col> and <col=8257CF>Necromancy</col> attacks against your active Slayer Assignment have ${script7653(int2, 1, 1, 1, 1)}% increased accuracy, and deal ${script7653(int1, 1, 1, 1, 1)}% increased damage.`;
    };
    if ((int4 > 0)) {
        string0 = `${string0}<br>- +${inttostring(int4, 10)}% Slayer XP.`;
    };
    return string0;
}