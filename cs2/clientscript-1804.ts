//[clientscript,clanwars_setup_magictooltip]
function script1804(int0: component, int1: int): void {
    if ((MAP_MEMBERS() == 1)) {
        script8800("You may choose:<br>- Allow all spells<br>- Standard spellbook only<br>- Bind/Snare/Entangle only<br>- No Magic", int0, int1);
    } else {
        script8800("You may choose:<br>- Standard spellbook<br>- Bind only<br>- No Magic", int0, int1);
    };
    return;
}