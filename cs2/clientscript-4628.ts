//
function script4628(int0: component): void {
    var int1 = script411(int0);
    var int2 = struct_getparam(int1, 7297);
    var int3 = struct_getparam(int1, 7307);
    var int4 = struct_getparam(int1, 7308);
    varclient_1518 = -1;
    varclient_2353 = "";
    if ((IF_FIND(int4) == 1)) {
        CC_SETONTIMER(callback(script4629, 0, int4, int3, script6431()));
    };
    return;
}