//
function script6763(int0: struct, int1: dbrow): int {
    switch (int0) {
        case 39801: {
            return DB_GETFIELDCOUNT(int1, 688224);
        }
        case 21098: {
            return DB_GETFIELDCOUNT(int1, 663648);
        }
        case 51131: {
            return DB_GETFIELDCOUNT(int1, 1282144);
        }
    };
    script12478("Unexpected promo in trh_get_reward_per_key_item_count - returning 0");
    return 0;
}