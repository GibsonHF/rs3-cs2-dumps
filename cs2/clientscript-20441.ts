//
function script20441(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string): void {
    var string2 = "";
    var int4 = 1;
    if ((int1 == 0)) {
        string2 = string0;
        int4 = 0;
    } else if ((script11201(5681) == 1)) {
        string2 = "Hand in your last inversion token before choosing another skill to focus on.";
        int4 = 0;
    } else if ((int0 != varbitplayer_60369)) {
        string2 = `Focus on ${string0} to earn shards towards your ${string1}!`;
        if (((varbitplayer_60369 != 0) && (script20432(int0, script20424(int0)) == 1))) {
            string2 = `${string2} <col=EB2F2F>Changing your focussed skill will remove all upgrade shards.`;
        };
        int4 = 1;
    } else {
        string2 = `Train ${string0} to earn shards towards your ${string1}!`;
        int4 = 0;
    };
    IF_SETTEXT(string2, 118096133);
    IF_SETTEXTALIGN(1, 1, 0, 118096133);
    if ((IF_FIND(118096135) == 1)) {
        if ((cc_getparam(4009) != int2)) {
            IF_SETMODEL(-1, 118096137);
            IF_SETMODEL(-1, 118096138);
            if (((varbitplayer_60369 > 0) || (varplayer_12541 > 0))) {
                IF_SETHIDE(0, 118096139);
            } else {
                IF_SETHIDE(1, 118096139);
            };
            cc_setparam(4009, int2);
        } else {
            IF_SETHIDE(1, 118096139);
        };
    };
    if ((int3 != -1)) {
        script3536("Left: Regular skillcape.<br>Right: Inverted skillcape.", 118096136, -1);
    } else {
        script16247(118096136, -1);
    };
    IF_SETHIDE(script12585(int4), 118096134);
    return;
}