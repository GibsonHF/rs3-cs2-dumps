//
function script6905(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int0 == 2)) {
        script13971(int5, -1, 28553, "Send Challenge", 0);
        IF_SETHIDE(1, int6);
        IF_SETHIDE(0, int7);
        IF_SETMODELANIM(9788, int3);
        IF_SETMODELANIM(9788, int4);
        script6906(0, int1);
        script6906(1, int2);
        IF_SETONOP(callback(script6904, 1, int1, int2, int3, int4, int5, int6, int7), int1);
        IF_SETONOP(callback(script6908), int2);
    } else if ((int0 == 1)) {
        script13971(int5, -1, 28553, "Send Challenge", 0);
        IF_SETHIDE(0, int6);
        IF_SETHIDE(1, int7);
        IF_SETMODELANIM(9850, int3);
        IF_SETMODELANIM(9850, int4);
        script6906(1, int1);
        script6906(0, int2);
        IF_SETONOP(callback(script6908), int1);
        IF_SETONOP(callback(script6904, 2, int1, int2, int3, int4, int5, int6, int7), int2);
    } else {
        script13971(int5, -1, 28553, "Send Challenge", 1);
        IF_SETHIDE(1, int6);
        IF_SETHIDE(1, int7);
        IF_SETMODELANIM(9804, int3);
        IF_SETMODELANIM(9804, int4);
        script6906(0, int1);
        script6906(0, int2);
        IF_SETONOP(callback(script6904, 1, int1, int2, int3, int4, int5, int6, int7), int1);
        IF_SETONOP(callback(script6904, 2, int1, int2, int3, int4, int5, int6, int7), int2);
    };
    return;
}