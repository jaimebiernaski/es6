/**
 * Tree example
 */

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    /**
     * Array helpers does not work with iterators/generators
     */
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('comment 1', []),
  new Comment('comment 2', []),
  new Comment('comment 3', []),
];

const tree = new Comment('Post Comment!', children);

// console.log('Tree', tree);

for (let value of tree) {
  console.log(value);
}
