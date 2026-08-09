//
function script16348(int0: number): string {
    if ((int0 == -1)) {
        script12478("Attempted to get desc of promo from a null promo info dbrow.");
        return "";
    };
    return dbrow_getfield(int0, 638992, 0);
}