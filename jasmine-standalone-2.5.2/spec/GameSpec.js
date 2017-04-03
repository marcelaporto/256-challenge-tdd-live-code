describe("game", function() {
  describe("boardFromString", function() {
    it("should be able to initialize a board", function() {
      var initialString = '2002022020000002'
      var sideLength = 4
      var correctResult = [
        [2,0,0,2],
        [0,2,2,0],
        [2,0,0,0],
        [0,0,0,2]
      ]
      var actualResult = boardFromString(initialString)
      expect(actualResult).toEqual(correctResult);
    });
  });
  describe("moveRowRight", function() {
    it("should be able to initialize a board", function() {
      var row = [0,0,0,0]
      expect(moveRowRight(row)).toEqual([0,0,0,0]);
    });

    it("should sum neighbors", function() {
      var row = [0,0,2,2]
      expect(moveRowRight(row)).toEqual([0,0,0,4]);
    });

    it("should sum nonadjacent neighbors", function() {
      var row = [2,0,0,2]
      expect(moveRowRight(row)).toEqual([0,0,0,4]);
    });

    it("should sum nonadjacent neighbors only if equal", function() {
      var row = [2,0,2,4]
      expect(moveRowRight(row)).toEqual([0,0,4,4]);
    });

    it("should sum multiple different adjacent number pairs", function() {
      var row = [4,2,2,2]
      expect(moveRowRight(row)).toEqual([0,4,2,4]);
    });
  });
  describe("moveDown", function() {
    it("should be able to move board down", function() {
      var board = [
        [2,4,0,2],
        [0,2,4,8],
        [2,4,0,4],
        [0,0,4,2]
      ]
      var correctResult = [
        [0,0,0,2],
        [0,4,0,8],
        [0,2,0,4],
        [4,4,8,2]
      ]
      expect(moveDown(board)).toEqual(correctResult);
    });
  });
  describe("transpose", function() {
    it("should transpose shit", function() {
      var board = [
        [2,4,0,2],
        [0,2,4,8],
        [2,4,0,4],
        [0,0,4,2]
      ]
      var correctResult = [
        [2,0,2,0],
        [4,2,4,0],
        [0,4,0,4],
        [2,8,4,2]
      ]
      expect(transpose(board)).toEqual(correctResult);
    });
  });
});
