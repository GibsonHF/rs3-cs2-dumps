//
function script619(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int7 = comp(1495, 17);  // marketplace_preview:construction_layer
    switch (int6) {
        case 0: {
            int7 = comp(1495, 17);  // marketplace_preview:construction_layer
            break;
        }
        case 1: {
            int7 = comp(1495, 15);  // marketplace_preview:ragdoll_model
            break;
        }
        case 2: {
            int7 = comp(1495, 16);  // marketplace_preview:pet_layer
            break;
        }
        case 3: {
            int7 = comp(1495, 18);  // marketplace_preview:preview_anim_layer
            break;
        }
    };
    IF_SETMODELANGLE(int0, int1, int2, int3, int4, int5, int7);
    return;
}