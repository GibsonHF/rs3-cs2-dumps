//
function script17525(int0: number, int1: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = script17507(int0);
    switch (int4) {
        case 0: {
            int2 = 3;
            break;
        }
        case 1: {
            int2 = 7;
            break;
        }
        case 2: {
            int2 = 15;
            break;
        }
        default: {
            script12478(`necro_ritual_information_build_output_other - $recipe has no size req specified! $recipe_size_req is ${inttostring(int4, 10)}`);
            break;
        }
    };
    if ((int1 == 1)) {
        int3 = (int3 + (script17831() / 10));
        if ((script18411(5) == 1)) {
            int3 = (int3 + 50);
        };
        if (((script19657() == 1) && (script4148() == 0))) {
            int3 = (int3 + 20);
        };
    };
    return SCALE(int2, 100, (100 + int3));
}