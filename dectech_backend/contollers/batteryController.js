import calculateBattery from '../../utils/calculatorLogic';

export const recommendBattery = (req, res) => {
  try {
    const { load, hours, voltage = 12, dod = 0.8 } = req.body;

    if (!load || !hours || load <= 0 || hours <= 0) {
      return res
        .status(400)
        .json({ message: 'load and hours must be greater than 0 ' });
    }

    if (voltage !== 12 && voltage !== 24 && voltage !== 48) {
      return res
        .status(400)
        .json({ message: 'Voltage must be !2, 24,48 volts' });
    }
    if (dod <= 0 || dod > 1) {
      return res.status(400).json({ message: 'Dod must between 0.1 and 1' });

      const recoomendedAh = calaculateBAtterey(load, hours, voltage, dod);

      res.status(200).json({
        load,
        hours,
        voltage,
        dod,
        reconmmendAh,
      });
    }
  } catch (err) {
    console.error('Battery calaculaton failed:', err.message);
    res.status(500).json({ message: 'internal server error' });
  }
};
