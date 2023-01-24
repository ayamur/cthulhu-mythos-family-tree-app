import Elder from "./Elder";

const Eldest = (props) => {
  return (
    <div>
      {props.name}
      <Elder name="Nyarlathotep" spawn={['Viburnius Marco', 'Viburnius Marco Legatus of Legio 11', 'Viburnia']} />
      <Elder name="The Nameless Mist" spawn={['Yog-Sothoth', 'Nug', 'Cthulhu', 'Shaurash-ho', 'Yogash the Ghoul', "K'baa the Serpent", 'Ghoth the Burrower']} />
      <Elder name="Darkness" spawn={["Shub-Nirath", 'Yeb', 'Tsathoggua', 'Yabou', 'Nush the Eternal', 'Gilles Grenier', 'Hippolyte Le Sorcier']} />

    </div>
  );
}

export default Eldest;