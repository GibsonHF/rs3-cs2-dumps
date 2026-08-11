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
    IF_SETTEXT(string2, comp(1802, 261));  // timed_event:anniversary_skillcapes_tracker_layer_text
    IF_SETTEXTALIGN(1, 1, 0, comp(1802, 261));  // timed_event:anniversary_skillcapes_tracker_layer_text
    if ((IF_FIND(comp(1802, 263)) == 1)) {  // timed_event:anniversary_skillcapes_selected_cape_layer
        if ((cc_getparam(4009) != int2)) {
            IF_SETMODEL(-1 as model, comp(1802, 265));  // timed_event:anniversary_skillcapes_selected_cape_model_normal
            IF_SETMODEL(-1 as model, comp(1802, 266));  // timed_event:anniversary_skillcapes_selected_cape_model
            if (((varbitplayer_60369 > 0) || (varplayer_12541 > 0))) {
                IF_SETHIDE(false, comp(1802, 267));  // timed_event:anniversary_skillcapes_spinner
            } else {
                IF_SETHIDE(true, comp(1802, 267));  // timed_event:anniversary_skillcapes_spinner
            };
            cc_setparam(4009, int2);
        } else {
            IF_SETHIDE(true, comp(1802, 267));  // timed_event:anniversary_skillcapes_spinner
        };
    };
    if ((int3 != -1)) {
        script3536("Left: Regular skillcape.<br>Right: Inverted skillcape.", 118096136, -1);
    } else {
        script16247(118096136, -1);
    };
    IF_SETHIDE(script12585(int4), comp(1802, 262));  // timed_event:anniversary_skillcapes_focus_button
    return;
}