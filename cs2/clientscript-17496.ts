//
function script17496(int0: dbrow): string {
    if ((script17495("necro_ritual_site_to_site_name_get", int0) == 1)) {
        return "null";
    };
    return dbrow_getfield(int0, 958480, 0);
}