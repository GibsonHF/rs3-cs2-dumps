//
function script11172(int0: dbrow): unknown_int {
    if ((DB_GETROWTABLE(int0) != 181)) {
        return 0;
    };
    if ((script10881(dbrow_getfield(int0, 741408, 0)) == 1)) {
        return 0;
    };
    switch (int0) {
        case 17267: {
            if ((script15757() == 1)) {
                return 1;
            };
            break;
        }
    };
    return script11173(int0);
}