//
function script6762(int0: number, int1: number): [number, number] {
    switch (int0) {
        case 39801: {
            return dbrow_getfield(int1, 688224, 0);
        }
        case 21098: {
            return dbrow_getfield(int1, 663648, 0);
        }
        case 51131: {
            return dbrow_getfield(int1, 1282144, 0);
        }
    };
    script12478("Unexpected promo in trh_get_reward_per_key_item - returning null,0");
    return [-1, 0];
}