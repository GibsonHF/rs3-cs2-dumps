//
function script17497(int0: dbrow): loc {
    if ((script17495("necro_ritual_site_to_site_pedestal_get", int0) == 1)) {
        return -1 as loc;
    };
    return dbrow_getfield(int0, 958545, 0);
}