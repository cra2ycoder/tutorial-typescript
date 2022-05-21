/**
 * @description
 * TUPLES
 *
 *  - fixed length of array
 *  - values can be different data types
 *  - will be transformed into regular javascript array
 *  - array functions/properties can be accessible
 */

const person: [string, number] = ['Joe', 20]

/**
 * @description
 *
 * ENUM
 */

enum Colors {
  Red,
  Green,
  Blue,
}

enum SIGNAL_STATE {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

const currentSignal = 'green'

if (currentSignal === SIGNAL_STATE.GREEN) {
  // open traffic
}
