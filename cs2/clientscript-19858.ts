//
function script19858(int0: achievement, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: component, int7: component): void {
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = script19851(int0);
    stack(ACHIEVEMENT_SPRITE(int0));
    stack(int1);
    IF_SETGRAPHIC();
    stack(131);
    stack(36);
    stack(7208);
    stack(int0);
    enum_getvalue();
    stack(" (+");
    stack(131);
    stack(0);
    stack(7209);
    stack(int0);
    enum_getvalue();
    var string0 = `${stack()}${inttostring(stack(), 10)} CombatScore)`;
    IF_SETTEXT(string0, int2);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int8, 1)}/${TOSTRING_LOCALISED(int9, 1)}`, int3);
    IF_SETSIZE(0, 0, 1, 1, int5);
    IF_SETSIZE(SCALE(int8, int9, IF_GETWIDTH(int5)), 0, 0, 1, int5);
    IF_SETOPBASE(`<col=B8D1D1>${ACHIEVEMENT_GETNAME(int0)}</col>`, int4);
    IF_SETOPCURSOR(1, 210, int4);
    if ((int8 == int9)) {
        script7794(int6, 28303 as struct);
    } else {
        script7794(int6, 21363 as struct);
    };
    var int10 = script19830(int0);
    IF_SETOBJECT_NONUM(int10, 1, int7);
    IF_SETOPBASE(`<col=B8D1D1>${ACHIEVEMENT_GETNAME(int0)}</col>`, int7);
    IF_SETOPCURSOR(1, 172 as cursor, int7);
    IF_SETONOP(callback(script19859, int0), int7);
    IF_SETONMOUSEREPEAT(callback(script9564, int10, -2147483645, -1), int7);
    return;
}