enum Direction {
  Vertical = "v",
  Horizontal = "h",
}

class Player {
  name: string;
  direction: Direction;

  constructor(name: string, direction: Direction) {
    this.name = name;
    this.direction = direction;
  }

}

export { Direction, Player };
