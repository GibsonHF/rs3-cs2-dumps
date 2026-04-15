//
function script6905(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component): void {
    if ((int0 == 2)) {
        script13971(int5, comp(-1, 65535), 28553 as struct, "Send Challenge", false);
        IF_SETHIDE(true, int6);
        IF_SETHIDE(false, int7);
        IF_SETMODELANIM(9788 as seq, int3);
        IF_SETMODELANIM(9788 as seq, int4);
        script6906(0, int1);
        script6906(1, int2);
        IF_SETONOP(callback(script6904, 1, int1, int2, int3, int4, int5, int6, int7), int1);
        IF_SETONOP(callback(script6908), int2);
    } else if ((int0 == 1)) {
        script13971(int5, comp(-1, 65535), 28553 as struct, "Send Challenge", false);
        IF_SETHIDE(false, int6);
        IF_SETHIDE(true, int7);
        IF_SETMODELANIM(9850 as seq, int3);
        IF_SETMODELANIM(9850 as seq, int4);
        script6906(1, int1);
        script6906(0, int2);
        IF_SETONOP(callback(script6908), int1);
        IF_SETONOP(callback(script6904, 2, int1, int2, int3, int4, int5, int6, int7), int2);
    } else {
        script13971(int5, comp(-1, 65535), 28553 as struct, "Send Challenge", true);
        IF_SETHIDE(true, int6);
        IF_SETHIDE(true, int7);
        IF_SETMODELANIM(9804 as seq, int3);
        IF_SETMODELANIM(9804 as seq, int4);
        script6906(0, int1);
        script6906(0, int2);
        IF_SETONOP(callback(script6904, 1, int1, int2, int3, int4, int5, int6, int7), int1);
        IF_SETONOP(callback(script6904, 2, int1, int2, int3, int4, int5, int6, int7), int2);
    };
    return;
}