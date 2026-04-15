//
function script20441(int0: int, int1: unknown_int, int2: obj, int3: obj, string0: string, string1: string): void {
    var string2 = "";
    var int4 = true;
    if ((int1 == 0)) {
        string2 = string0;
        int4 = false;
    } else if ((script11201(5681 as category) == 1)) {
        string2 = "Hand in your last inversion token before choosing another skill to focus on.";
        int4 = false;
    } else if ((int0 != varbitplayer_60369)) {
        string2 = `Focus on ${string0} to earn shards towards your ${string1}!`;
        if (((varbitplayer_60369 != 0) && (script20432(int0, script20424(int0)) == 1))) {
            string2 = `${string2} <col=EB2F2F>Changing your focussed skill will remove all upgrade shards.`;
        };
        int4 = true;
    } else {
        string2 = `Train ${string0} to earn shards towards your ${string1}!`;
        int4 = false;
    };
    IF_SETTEXT(string2, comp(1802, 261));
    IF_SETTEXTALIGN(1, 1, 0, comp(1802, 261));
    if ((IF_FIND(comp(1802, 263)) == 1)) {
        if ((cc_getparam(4009) != int2)) {
            IF_SETMODEL(-1 as model, comp(1802, 265));
            IF_SETMODEL(-1 as model, comp(1802, 266));
            if (((varbitplayer_60369 > 0) || (varplayer_12541 > 0))) {
                IF_SETHIDE(false, comp(1802, 267));
            } else {
                IF_SETHIDE(true, comp(1802, 267));
            };
            cc_setparam(4009, int2);
        } else {
            IF_SETHIDE(true, comp(1802, 267));
        };
    };
    if ((int3 != -1 as obj)) {
        script3536("Left: Regular skillcape.<br>Right: Inverted skillcape.", comp(1802, 264), -1);
    } else {
        script16247(comp(1802, 264), -1);
    };
    IF_SETHIDE(script12585(int4), comp(1802, 262));
    return;
}