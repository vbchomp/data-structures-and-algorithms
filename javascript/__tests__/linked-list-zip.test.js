'use strict';

const LinkedList = require('../linked-list/lib/ll.js');

describe('zip function', () => {

  test('it zips the two lists', () => {
    console.log('here');
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    const ll2 = new LinkedList();
    ll2.append('a');
    ll2.append('b');
    ll2.append('c');
    console.log('lists', ll, ll2);

    let results = ll.zipList(ll2);
    expect(results.value).toEqual(1);
    expect(results.next.value).toEqual('a');
    expect(results.next.next.value).toEqual(2);
    expect(results.next.next.next.value).toEqual('b');
    expect(results.next.next.next.next.value).toEqual(3);
    expect(results.next.next.next.next.next.value).toEqual('c');
  });

  test('it zips the two lists when 1st list is longer', () => {
    console.log('here');
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    const ll2 = new LinkedList();
    ll2.append('a');
    ll2.append('b');
    ll2.append('c');
    console.log('lists', ll, ll2);

    let results = ll.zipList(ll2);
    expect(results.value).toEqual(1);
    expect(results.next.value).toEqual('a');
    expect(results.next.next.value).toEqual(2);
    expect(results.next.next.next.value).toEqual('b');
    expect(results.next.next.next.next.value).toEqual(3);
    expect(results.next.next.next.next.next.value).toEqual('c');
    expect(results.next.next.next.next.next.next.value).toEqual(4);
    expect(results.next.next.next.next.next.next.next.value).toEqual(5);
  });

  test('it zips the two lists when 2nd list is longer', () => {
    console.log('here');
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    const ll2 = new LinkedList();
    ll2.append('a');
    ll2.append('b');
    ll2.append('c');
    ll2.append('d');
    ll2.append('e');
    console.log('lists', ll, ll2);

    let results = ll.zipList(ll2);
    expect(results.value).toEqual(1);
    expect(results.next.value).toEqual('a');
    expect(results.next.next.value).toEqual(2);
    expect(results.next.next.next.value).toEqual('b');
    expect(results.next.next.next.next.value).toEqual(3);
    expect(results.next.next.next.next.next.value).toEqual('c');
    expect(results.next.next.next.next.next.next.value).toEqual('d');
    expect(results.next.next.next.next.next.next.next.value).toEqual('e');
  });

});
