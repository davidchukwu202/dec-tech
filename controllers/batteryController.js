import calculateBattery from '../utils/calculatorLogic.js';

export const recommendBattery = (req, res) => {
  try {
    const { load, hours, voltage = 12, dod = 0.8 } = req.body;

    // Validate load and hours
    if (!load || !hours || load <= 0 || hours <= 0) {
      return res
        .status(400)
        .json({ message: 'Load and hours must be greater than 0' });
    }

    // Validate voltage
    if (voltage !== 12 && voltage !== 24 && voltage !== 48) {
      return res
        .status(400)
        .json({ message: 'Voltage must be 12, 24, or 48 volts' });
    }

    // Validate DoD
    if (dod <= 0 || dod > 1) {
      return res
        .status(400)
        .json({ message: 'DoD must be between 0.1 and 1 (e.g. 0.8)' });
    }

    // Perform calculation
    const recommendedAh = calculateBattery(load, hours, voltage, dod);

    // Send result
    res.status(200).json({
      load,
      hours,
      voltage,
      dod,
      recommendedAh,
    });
  } catch (err) {
    console.error('Battery calculation failed:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
