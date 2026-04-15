//
function script4678(int0: component, int1: component): void {
    var int2 = IF_GETWIDTH(int1);
    var int3 = (int2 / enum_getvalue(0, 0, 3840 as cs2enum, varbitplayer_9216));
    var int4 = (varbitplayer_9219 * int3);
    IF_SETSIZE(int4, IF_GETHEIGHT(int0), 0, 0, int0);
    return;
}