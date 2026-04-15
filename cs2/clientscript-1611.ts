//
function script1611(int0: unknown_int, int1: dbrow): seq {
    switch (int0) {
        case 1: {
            return dbrow_getfield(int1, 983184, 0);
        }
        case 2: {
            return dbrow_getfield(int1, 983200, 0);
        }
        case 3: {
            return dbrow_getfield(int1, 983216, 0);
        }
        case 0: {
            return dbrow_getfield(int1, 983168, 0);
        }
    };
    return -1 as seq;
}