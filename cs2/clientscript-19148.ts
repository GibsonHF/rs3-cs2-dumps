//
function script19148(int0: struct): dbrow {
    switch (int0) {
        case 32986: {
            return 6419 as dbrow;
        }
        case 50263: {
            return 14053 as dbrow;
        }
        case 2951: {
            return 13967 as dbrow;
        }
    };
    script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
    return -1 as dbrow;
}