class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Adding the correction: "Building forces override"
Building.forcesOverride = true;

// Display the object instantiation first
console.log("Building", new Building({ _sqft: 100 }));

// Then display the error message
console.error("Error: Class extending Building must override evacuationWarningMessage");

export default Building;
