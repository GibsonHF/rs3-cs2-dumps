//
function script19180(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    if ((int1 != -1 as seq)) {
        if ((int2 > 0)) {
            stack(int2);
            stack(16429);
            stack(int1);
            unk11010(84410411, "ii", 84410411);
            unk11009();
        } else {
            IF_SETMODELANIM(int1, comp(1288, 43));  // trh_academy_shared_overlay:entity_model
        };
        IF_SETONTIMER(callback(script19181, 84410411, (int2 + SEQLENGTH(int1))), comp(1288, 43));  // trh_academy_shared_overlay:entity_model
    };
    if ((int0 != -1 as seq)) {
        IF_SETMODELANIM(int0, comp(1288, 69));  // trh_academy_shared_overlay:character_model
        varbitplayer_56046 = 1;
        IF_SETONTIMER(callback(script19181, 84410437, SEQLENGTH(int0)), comp(1288, 69));  // trh_academy_shared_overlay:character_model
    };
    if (((int3 != -1 as seq) && (int4 != -1 as model))) {
        if ((int2 > 0)) {
            stack(int2);
            stack(19253);
            stack(int4);
            unk11010(84410424, "ii", 84410424);
            unk11009();
            stack(int2);
            stack(16429);
            stack(int3);
            unk11010(84410424, "ii", 84410424);
            unk11009();
        } else {
            IF_SETMODEL(int4, comp(1288, 56));  // trh_academy_shared_overlay:spotanim_model
            IF_SETMODELANIM(int3, comp(1288, 56));  // trh_academy_shared_overlay:spotanim_model
        };
        IF_SETMODELANGLE(int5, int6, int7, int8, int9, int10, comp(1288, 56));  // trh_academy_shared_overlay:spotanim_model
        IF_SETONTIMER(callback(script19181, 84410424, (int2 + SEQLENGTH(int3))), comp(1288, 56));  // trh_academy_shared_overlay:spotanim_model
    };
    return;
}