//
function script659(int0: component, int1: unknown_int, int2: unknown_int, int3: int, int4: obj, int5: unknown_int, string0: string, string1: string): void {
    if ((int0 != comp(-1, 65535))) {
        stack(657);
        stack(-2147483645);
        stack("i");
        stack(int0);
        IF_SETONTARGETENTER();
        IF_SETONTARGETLEAVE(callback(script658, -2147483645), int0);
        IF_SETONINVTRANSMIT(callback(script15834, -2147483645, int1, int2, int3, int4, int5, 93, 1), int0);
        IF_SETONSTATTRANSMIT(callback(script15834, -2147483645, int1, int2, int3, int4, int5, 23, 1), int0);
        IF_SETONVARTRANSMIT(callback(script15834, -2147483645, int1, int2, int3, int4, int5, 1785, 1831, 4823, 3), int0);
        script664(int0, int1, int2, int3, int4, int5);
    };
    if ((IF_FIND(comp(1923, 36)) == 1)) {
        CC_SETONTARGETENTER(callback(script697, 126025741));
        stack(698);
        stack(126025741);
        stack("i");
        CC_SETONTARGETLEAVE();
    };
    if ((IF_FIND(comp(1430, 36)) == 1)) {
        CC_SETONTARGETENTER(callback(script697, 93716504));
        stack(698);
        stack(93716504);
        stack("i");
        CC_SETONTARGETLEAVE();
    };
    if ((IF_FIND(comp(1506, 18)) == 1)) {
        CC_SETONTARGETENTER(callback(script697, 98697234));
        stack(698);
        stack(98697234);
        stack("i");
        CC_SETONTARGETLEAVE();
    };
    return;
}