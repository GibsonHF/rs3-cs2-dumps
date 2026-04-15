//
function script14488(int0: dbrow): boolean {
    if ((script17495("necro_ritual_site_has_well_of_souls_get", int0) == 1)) {
        return false;
    };
    return dbrow_getfield(int0, 958592, 0);
}