const ONE_EARTH_YEAR_IN_SECONDS = 31557600

let planetYears = new Map()
planetYears.set("mercury", 0.2408467)
planetYears.set("venus", 0.61519726)
planetYears.set("earth", 1.0)
planetYears.set("mars",1.8808158)
planetYears.set("jupiter", 11.862615)
planetYears.set("saturn", 29.447498)
planetYears.set("uranus", 84.016846)
planetYears.set("neptune", 164.79132)

export const age = (planet, seconds) => {
  return parseFloat((seconds / ONE_EARTH_YEAR_IN_SECONDS /planetYears.get(planet)).toFixed(2))
};
