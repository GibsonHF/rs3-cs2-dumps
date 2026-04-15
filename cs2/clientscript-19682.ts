//
function script19682(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if (((varbitplayer_60053 == 1) && (script6431() == false))) {
        [int1, int2, int3, int4] = script14244();
        IF_SETPOSITION(int1, int2, 0, 0, int0);
        IF_SETONRESIZE(callback(script14166, int0), script10074());
    };
    return;
}