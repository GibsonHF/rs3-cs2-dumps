//
function script11352(): void {
    if ((IF_GETHIDE(comp(1311, 583)) == true)) {  // mtxmgt:pet_abilities
        IF_SETHIDE(false, comp(1311, 583));  // mtxmgt:pet_abilities
    } else {
        IF_SETHIDE(true, comp(1311, 583));  // mtxmgt:pet_abilities
    };
    script11354();
    return;
}