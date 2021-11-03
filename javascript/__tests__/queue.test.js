'use strict';

const Queue = require('../stack-and-queue/util/queue.js');

describe('queue tests', () => {

  it('Successfully enqueues into a queue', () => {
    let testQueue = new Queue();
    let testValOne = 'I am One';
    let testValTwo = 'You are Two';
    testQueue.enqueue(testValOne);
    testQueue.enqueue(testValTwo);
    expect(testQueue.front.value).toEqual(testValOne);
    expect(testQueue.front.value).toEqual(testValOne);
  });

  it('Successfully enqueue multiple values into a queue', () => {
    let testQueue = new Queue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];

    testVals.forEach(string => testQueue.enqueue(string));
    expect(testQueue.front.value).toEqual(testVals[0]);
    expect(testQueue.front.next.value).toEqual(testVals[1]);
  });

  it('Successfully dequeue out of a queue the expected value', () => {
    let testQueue = new Queue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];
    testVals.forEach(string => testQueue.enqueue(string));

    expect(testQueue.front.value).toEqual(testVals[0]);
    expect(testQueue.front.next.value).toEqual(testVals[1]);

    let kickedNode = testQueue.dequeue();
    expect(kickedNode.value).toEqual(testVals[0]);
    expect(kickedNode.next).toBe(null);
  });

  it('Successfully empty a queue after multiple dequeues', () => {
    let testQueue = new Queue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];

    testVals.forEach(string => testQueue.enqueue(string));
    for (let i = 0; i < testVals.length; i++) {
      testQueue.dequeue();
    }
    expect(testQueue.isEmpty());
  });

  it('Successfully peek into a queue, seeing the expected value', () => {
    let testQueue = new Queue();
    let testVals = ['I am One', 'You are Two', 'We are Three'];

    testVals.forEach(string => testQueue.enqueue(string));
    expect(testQueue.peek()).toEqual(testVals[0]);
  });

  it('Successfully instantiate an empty Queue', () => {
    let testQueue = new Queue();
    expect(testQueue.isEmpty());
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let testQueue = new Queue();
    expect(testQueue.isEmpty());
    expect(testQueue.front).toBe(null);
    expect(() => testQueue.dequeue()).toThrow('Queue is empty, hurry up!!');
    expect(() => testQueue.peek()).toThrow('The Queue is empty');
  });
});
