class Utils {
  spacedNumber(number: number) {
    return Math.round(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}

export default new Utils();
