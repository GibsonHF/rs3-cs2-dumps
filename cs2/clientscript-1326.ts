//
function script1326(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component): void {
    IF_SETMODEL(enum_getvalue(0, 31, 1595 as cs2enum, (varbitplayer_12828 / 10)), int0);
    IF_SETMODEL(enum_getvalue(0, 31, 1595 as cs2enum, MODULO(varbitplayer_12828, 10)), int1);
    IF_SETOBJECT_NONUM(varplayer_2606, 1, int5);
    IF_SETOBJECT_NONUM(varplayer_2607, 1, int6);
    if ((varbitplayer_12835 == 0)) {
        IF_SETMODEL(17219 as model, int3);
        IF_SETMODEL(-1 as model, int2);
        IF_SETMODEL(-1 as model, int4);
        return;
    };
    if ((varbitplayer_12835 > varbitplayer_12828)) {
        IF_SETMODEL(17219 as model, int3);
        IF_SETMODEL(17221 as model, int2);
        IF_SETMODEL(17217 as model, int4);
        return;
    };
    if ((varbitplayer_12835 < varbitplayer_12828)) {
        IF_SETMODEL(17219 as model, int3);
        IF_SETMODEL(17220 as model, int2);
        IF_SETMODEL(17218 as model, int4);
        return;
    };
    IF_SETMODEL(17216 as model, int3);
    IF_SETMODEL(-1 as model, int2);
    IF_SETMODEL(-1 as model, int4);
    return;
}