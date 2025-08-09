// gwaj_craft_a_scalabl.js

// Define the Game World Architecture (GWAJ) framework
const GWAJ = {};

// Game Prototype Integrator class
class GamePrototypeIntegrator {
  constructor(gamePrototype) {
    this.gamePrototype = gamePrototype;
    this.scalingConfig = {};
  }

  // Set scaling configuration
  setScalingConfig(config) {
    this.scalingConfig = config;
  }

  // Integrate game prototype with scaling
  integrate() {
    // Create a clone of the game prototype
    const gameInstance = Object.create(this.gamePrototype);

    // Apply scaling to the game instance
    this.applyScaling(gameInstance);

    // Return the scaled game instance
    return gameInstance;
  }

  // Apply scaling to the game instance
  applyScaling(gameInstance) {
    // Loop through each component of the game instance
    for (let component in gameInstance) {
      if (typeof gameInstance[component] === 'object') {
        // Recursively apply scaling to nested components
        this.applyScaling(gameInstance[component]);
      } else {
        // Apply scaling to the component based on the configuration
        switch (this.scalingConfig.type) {
          case 'linear':
            gameInstance[component] *= this.scalingConfig.factor;
            break;
          case 'exponential':
            gameInstance[component] **= this.scalingConfig.factor;
            break;
          default:
            console.error(`Invalid scaling type: ${this.scalingConfig.type}`);
        }
      }
    }
  }
}

// Example usage
const gamePrototype = {
  player: {
    health: 100,
    speed: 5,
  },
  enemies: [
    {
      health: 50,
      damage: 10,
    },
    {
      health: 20,
      damage: 5,
    },
  ],
};

const integrator = new GamePrototypeIntegrator(gamePrototype);
integrator.setScalingConfig({ type: 'linear', factor: 2 });
const scaledGameInstance = integrator.integrate();

console.log(scaledGameInstance);