const calculateBattery = (loadWatts, hours, voltage, dod) => {
  const usableWh = loadWatts * hours;
  const totalAh = usableWh / voltage;
  const adjustedAh = totalAh / dod;
  return Math.ceil(adjustedAh);
};

export default calculateBattery;
