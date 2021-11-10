'use strict';

const Stack = require('../stack-and-queue/util/stack.js');
// const Queue = require('../stack-and-queue/util/queue.js');
const PseudoQueue = require('../stack-queue-pseudo/util/pseudo.js');

describe('pseudo tests', () => {

  it('Successfully enqueues into a queue', () => {
    let testPseudo = new PseudoQueue();
    let testStackOne = new Stack();
    let testStackTwo = new Stack();
    testStackOne = ['I am One', 'You are Two', 'We are Three'];
    testStackTwo = ['I am Four', 'You are Five'];

    testStackOne.forEach(string => testPseudo.enqueue(string));
    testPseudo.enqueue(testStackOne);
    expect(testPseudo.front.value).toEqual(testStackOne[0]);

    // Cannot figure out how to get the the expected value of testStackTwo[0] to not be testStackOne[0] in the test.

    // Waited about 25 minutes and was not able to get TA assistance in Remo. Got tired of waiting and was too frustrated to continue working on this. I'm turning in as is. I will work more when I get to CT.

    // Did I create my Stacks correctly?
    testStackTwo.forEach(string => testPseudo.enqueue(string));
    testPseudo.enqueue(testStackTwo);
    expect(testPseudo.front.value).toEqual(testStackTwo[0]);
  });

  xit('Successfully enqueue multiple values into a queue', () => {
    let testPseudo = new PseudoQueue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];

    testVals.forEach(string => testPseudo.enqueue(string));
    expect(testPseudo.front.value).toEqual(testVals[0]);
    expect(testPseudo.front.next.value).toEqual(testVals[1]);
  });

  xit('Successfully dequeue out of a queue the expected value', () => {
    let testPseudo = new PseudoQueue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];
    testVals.forEach(string => testPseudo.enqueue(string));

    expect(testPseudo.front.value).toEqual(testVals[0]);
    expect(testPseudo.front.next.value).toEqual(testVals[1]);

    let kickedNode = testPseudo.dequeue();
    expect(kickedNode.value).toEqual(testVals[0]);
    expect(kickedNode.next).toBe(null);
  });

  xit('Successfully empty a queue after multiple dequeues', () => {
    let testPseudo = new PseudoQueue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];

    testVals.forEach(string => testPseudo.enqueue(string));
    for (let i = 0; i < testVals.length; i++) {
      testPseudo.dequeue();
    }
    expect(testPseudo.isEmpty());
  });

  xit('Successfully peek into a queue, seeing the expected value', () => {
    let testPseudo = new PseudoQueue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];

    testVals.forEach(string => testPseudo.enqueue(string));
    expect(testPseudo.peek()).toEqual(testVals[0]);
  });

  xit('Successfully instantiate an empty Queue', () => {
    let testPseudo = new PseudoQueue();
    expect(testPseudo.isEmpty());
  });

  xit('Calling dequeue or peek on empty queue raises exception', () => {
    let testPseudo = new PseudoQueue();
    expect(testPseudo.isEmpty());
    expect(testPseudo.front).toBe(null);
    expect(() => testPseudo.dequeue()).toThrow('Queue is empty, hurry up!!');
    expect(() => testPseudo.peek()).toThrow('The Queue is empty');
  });
});


// Do I need stack tests?
// xdescribe('stack tests', () => {

//   xit('Successfully push onto a stack', () => {

//   });

//   it('Successfully push multiple values onto stack', () => {

//   });

//   it('Successfully pop off the stack', () => {

//   });

//   it('Successfully empty a stack after multiple pops', () => {

//   });

//   it('Successfully peek the next item on the stack', () => {

//   });

//   it('Successfully instantiate an empty stack', () => {

//   });

//   it('Calling pop or peek on empty stack raises exception', () => {

//   });
// });
