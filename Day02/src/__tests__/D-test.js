// Kalau hanya import 1 item dari sebuah file
import compareObjects from '../compareObjects';

// kalau import lebih dari 1 item dari file yang sama 
// import {compareObjects, compareArrays} from '../compareObjects';

// kalau import 1 default dan yang lain export biasa
// import namaitemDefault, {itemLain} from '../compareObjects'; 

// kalau gk ada path itu berarti item yang dikirim ada di npm atau package manager
//  contoh : import React, {Component} from 'react'; jadi item React dianggap ada di dalam package manager

it('normal with return value = true'), () => {
    expect(compareObjects({one : 1, two : 2}, {two : 2, one: 1}).toEqual(true));
} 

it('different object length , return = false'), () => {
    expect(compareObjects({one : 1, two : 2, three:3}, {two : 2, one: 1}).toEqual(false));
} 

it('different proprties value , return = false'), () => {
    expect(compareObjects({one : 1, two : 3}, {two : 2, one: 1}).toEqual(false));
} 

// untuk latihan
//  tidak bisa di run karena blm install library jest